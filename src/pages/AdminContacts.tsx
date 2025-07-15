import { useEffect, useState, useMemo } from "react";
import { Search, Download, Info, LogOut, Filter, Calendar, User, Mail, Phone, Building, Clock, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Trash2, CheckSquare, Square } from "lucide-react";
import AdminLogin from "./AdminLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

interface Contact {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  organization: string;
  role?: string;
  enquiry_type?: string;
  message?: string;
  submitted_at: string;
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  is_high_intent?: boolean;
  location_city?: string;
  location_country?: string;
  tags?: string[];
}

const AdminContacts = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [paginatedContacts, setPaginatedContacts] = useState<Contact[]>([]);
  
  // Bulk actions state
  const [selectedContactIds, setSelectedContactIds] = useState<Set<string>>(new Set());
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetchContacts();
  }, [token]);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Memoized filtered contacts for better performance
  const filteredContactsMemo = useMemo(() => {
    let filtered = contacts;

    // Apply search filter
    if (debouncedSearchTerm) {
      filtered = filtered.filter(contact =>
        contact.full_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        contact.organization.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        (contact.phone && contact.phone.includes(debouncedSearchTerm)) ||
        (contact.message && contact.message.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      );
    }

    // Apply type filter
    if (filterType !== "all") {
      filtered = filtered.filter(contact => {
        switch (filterType) {
          case "high-intent":
            return contact.is_high_intent;
          case "demo":
            return contact.enquiry_type === "demo";
          case "pricing":
            return contact.enquiry_type === "pricing";
          case "recent": {
            const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
            return new Date(contact.submitted_at) > oneDayAgo;
          }
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [contacts, debouncedSearchTerm, filterType]);

  useEffect(() => {
    setFilteredContacts(filteredContactsMemo);
  }, [filteredContactsMemo]);

  useEffect(() => {
    paginateContacts();
  }, [filteredContacts, currentPage, itemsPerPage]);

  // Reset to first page when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, filterType]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://platskills.com/web-api/admin/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) throw new Error("Unauthorized");
      
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      setToken("");
      localStorage.removeItem("adminToken");
      toast({
        title: "Session Expired",
        description: "Please login again to continue.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };



  const paginateContacts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedContacts(filteredContacts.slice(startIndex, endIndex));
  };

  // Pagination helper functions
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  // Bulk actions functions
  const toggleContactSelection = (contactId: string) => {
    const newSelected = new Set(selectedContactIds);
    if (newSelected.has(contactId)) {
      newSelected.delete(contactId);
    } else {
      newSelected.add(contactId);
    }
    setSelectedContactIds(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedContactIds.size === paginatedContacts.length) {
      setSelectedContactIds(new Set());
    } else {
      setSelectedContactIds(new Set(paginatedContacts.map(contact => contact.id)));
    }
  };

  const clearSelection = () => {
    setSelectedContactIds(new Set());
  };

  const handleBulkDelete = async () => {
    if (selectedContactIds.size === 0) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedContactIds.size} contact(s)? This action cannot be undone.`
    );

    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
      // TODO: Replace with actual API call when backend is available
      // const response = await fetch("https://platskills.com/web-api/admin/contacts/bulk-delete", {
      //   method: "DELETE",
      //   headers: { 
      //     "Authorization": `Bearer ${token}`,
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ contactIds: Array.from(selectedContactIds) })
      // });

      // if (!response.ok) throw new Error("Failed to delete contacts");

      // For now, simulate deletion by removing from local state
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      const updatedContacts = contacts.filter(contact => !selectedContactIds.has(contact.id));
      setContacts(updatedContacts);
      
      toast({
        title: "Contacts Deleted",
        description: `Successfully deleted ${selectedContactIds.size} contact(s).`,
      });

      clearSelection();
    } catch (error) {
      console.error('Bulk delete error:', error);
      toast({
        title: "Error",
        description: "Failed to delete contacts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  // Clear selection when page changes
  useEffect(() => {
    clearSelection();
  }, [currentPage]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + A to select all on current page
      if ((event.ctrlKey || event.metaKey) && event.key === 'a' && event.target === document.body) {
        event.preventDefault();
        toggleSelectAll();
      }
      // Delete key to delete selected (with confirmation)
      if (event.key === 'Delete' && selectedContactIds.size > 0 && event.target === document.body) {
        event.preventDefault();
        handleBulkDelete();
      }
      // Escape to clear selection
      if (event.key === 'Escape' && selectedContactIds.size > 0) {
        clearSelection();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedContactIds, paginatedContacts]);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("adminToken");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const exportToCSV = () => {
    const headers = [
      "ID",
      "Name", 
      "Email", 
      "Phone", 
      "Organization", 
      "Role", 
      "Enquiry Type", 
      "Message", 
      "Submitted At",
      "High Intent",
      "Source Page",
      "UTM Source",
      "UTM Medium", 
      "UTM Campaign",
      "Location City",
      "Location Country",
      "Tags"
    ];
    
    const csvData = filteredContacts.map(contact => [
      contact.id,
      contact.full_name,
      contact.email,
      contact.phone || "",
      contact.organization,
      contact.role || "",
      contact.enquiry_type || "",
      contact.message || "",
      new Date(contact.submitted_at).toLocaleString(),
      contact.is_high_intent ? "Yes" : "No",
      contact.source_page || "",
      contact.utm_source || "",
      contact.utm_medium || "",
      contact.utm_campaign || "",
      contact.location_city || "",
      contact.location_country || "",
      (contact.tags && Array.isArray(contact.tags)) ? contact.tags.join(", ") : ""
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `contacts_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: `Exported ${filteredContacts.length} contacts to CSV.`,
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getEnquiryBadgeVariant = (type?: string) => {
    switch (type) {
      case "demo":
        return "default";
      case "pricing":
        return "secondary";
      case "implementation":
        return "outline";
      default:
        return "outline";
    }
  };

  if (!token) {
    return <AdminLogin onLogin={(tok) => { setToken(tok); localStorage.setItem("adminToken", tok); }} />;
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Controls Skeleton */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table Skeleton */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="hidden sm:table-cell">Organization</TableHead>
                    <TableHead className="hidden md:table-cell">Enquiry Type</TableHead>
                    <TableHead className="hidden lg:table-cell">Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(10)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-48 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse ml-auto"></div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <p className="text-gray-600 mt-1">Manage and review contact form submissions</p>
        </div>
        <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Contacts</p>
                <p className="text-xl font-semibold">{contacts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Recent (24h)</p>
                <p className="text-xl font-semibold">
                  {contacts.filter(c => {
                    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
                    return new Date(c.submitted_at) > oneDayAgo;
                  }).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">High Intent</p>
                <p className="text-xl font-semibold">
                  {contacts.filter(c => c.is_high_intent).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Filtered Results</p>
                <p className="text-xl font-semibold">{filteredContacts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Actions Bar */}
      {selectedContactIds.size > 0 && (
        <Card className="mb-4 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-blue-900">
                  {selectedContactIds.size} contact(s) selected
                  <div className="text-xs text-blue-600 mt-1">
                    Tip: Use Ctrl+A to select all, Delete to delete selected, Esc to clear
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearSelection}
                  className="text-blue-700 border-blue-300 hover:bg-blue-100"
                >
                  Clear Selection
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleBulkDelete}
                  disabled={isDeleting}
                  className="flex items-center gap-2"
                >
                  {isDeleting ? (
                    <>
                      <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete Selected
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search contacts by name, email, organization, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Contacts</SelectItem>
                  <SelectItem value="recent">Recent (24h)</SelectItem>
                  <SelectItem value="high-intent">High Intent</SelectItem>
                  <SelectItem value="demo">Demo Requests</SelectItem>
                  <SelectItem value="pricing">Pricing Inquiries</SelectItem>
                </SelectContent>
              </Select>
              <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 per page</SelectItem>
                  <SelectItem value="25">25 per page</SelectItem>
                  <SelectItem value="50">50 per page</SelectItem>
                  <SelectItem value="100">100 per page</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleSelectAll}
                      className="p-1 h-auto"
                    >
                      {selectedContactIds.size === paginatedContacts.length && paginatedContacts.length > 0 ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </Button>
                  </TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="hidden sm:table-cell">Organization</TableHead>
                  <TableHead className="hidden md:table-cell">Enquiry Type</TableHead>
                  <TableHead className="hidden lg:table-cell">Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedContacts.map((contact) => (
                  <TableRow key={contact.id} className={selectedContactIds.has(contact.id) ? "bg-blue-50" : ""}>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleContactSelection(contact.id)}
                        className="p-1 h-auto"
                      >
                        {selectedContactIds.has(contact.id) ? (
                          <CheckSquare className="w-4 h-4 text-blue-600" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{contact.full_name}</div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {contact.email}
                        </div>
                        {contact.phone && (
                          <div className="text-sm text-gray-600 flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {contact.phone}
                          </div>
                        )}
                        {contact.is_high_intent && (
                          <Badge variant="destructive" className="text-xs">High Intent</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="space-y-1">
                        <div className="font-medium">{contact.organization}</div>
                        {contact.role && (
                          <div className="text-sm text-gray-600">{contact.role}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {contact.enquiry_type && (
                        <Badge variant={getEnquiryBadgeVariant(contact.enquiry_type)}>
                          {contact.enquiry_type}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="text-sm">{formatDate(contact.submitted_at)}</div>
                      {contact.location_city && contact.location_country && (
                        <div className="text-xs text-gray-500">
                          {contact.location_city}, {contact.location_country}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedContact(contact)}
                      >
                        <Info className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No contacts found matching your criteria.</p>
            </div>
          )}
          
          {/* Pagination Controls */}
          {filteredContacts.length > 0 && (
            <div className="flex items-center justify-between px-6 py-4 border-t">
              <div className="text-sm text-gray-600">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} contacts
              </div>
              
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(1)}
                    disabled={!hasPrevPage}
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={!hasPrevPage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((pageNum, index) => (
                      pageNum === '...' ? (
                        <span key={index} className="px-2 py-1 text-gray-400">...</span>
                      ) : (
                        <Button
                          key={index}
                          variant={pageNum === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => goToPage(pageNum as number)}
                          className="min-w-[36px]"
                        >
                          {pageNum}
                        </Button>
                      )
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={!hasNextPage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(totalPages)}
                    disabled={!hasNextPage}
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Details Dialog */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-sm">{selectedContact.full_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-sm">{selectedContact.email}</p>
                  </div>
                  {selectedContact.phone && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="text-sm">{selectedContact.phone}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Organization</label>
                    <p className="text-sm">{selectedContact.organization}</p>
                  </div>
                  {selectedContact.role && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Role</label>
                      <p className="text-sm">{selectedContact.role}</p>
                    </div>
                  )}
                  {selectedContact.enquiry_type && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Enquiry Type</label>
                      <Badge variant={getEnquiryBadgeVariant(selectedContact.enquiry_type)} className="ml-2">
                        {selectedContact.enquiry_type}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Message */}
              {selectedContact.message && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Message</label>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
              )}

              <Separator />

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-500">Submitted:</span>
                    <span className="ml-2">{formatDate(selectedContact.submitted_at)}</span>
                  </div>
                  {selectedContact.source_page && (
                    <div>
                      <span className="font-medium text-gray-500">Source Page:</span>
                      <span className="ml-2">{selectedContact.source_page}</span>
                    </div>
                  )}
                  {selectedContact.location_city && selectedContact.location_country && (
                    <div>
                      <span className="font-medium text-gray-500">Location:</span>
                      <span className="ml-2">{selectedContact.location_city}, {selectedContact.location_country}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  {selectedContact.utm_source && (
                    <div>
                      <span className="font-medium text-gray-500">UTM Source:</span>
                      <span className="ml-2">{selectedContact.utm_source}</span>
                    </div>
                  )}
                  {selectedContact.utm_medium && (
                    <div>
                      <span className="font-medium text-gray-500">UTM Medium:</span>
                      <span className="ml-2">{selectedContact.utm_medium}</span>
                    </div>
                  )}
                  {selectedContact.utm_campaign && (
                    <div>
                      <span className="font-medium text-gray-500">UTM Campaign:</span>
                      <span className="ml-2">{selectedContact.utm_campaign}</span>
                    </div>
                  )}
                  {selectedContact.is_high_intent && (
                    <div>
                      <Badge variant="destructive" className="text-xs">High Intent Lead</Badge>
                    </div>
                  )}
                  {selectedContact.tags && Array.isArray(selectedContact.tags) && selectedContact.tags.length > 0 && (
                    <div>
                      <span className="font-medium text-gray-500">Tags:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedContact.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContacts;
