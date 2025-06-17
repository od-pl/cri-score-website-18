import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, FileText, Eye, Globe, AlertCircle } from "lucide-react";
const Legal = () => {
  const policies = [{
    title: "Privacy Policy",
    icon: Shield,
    lastUpdated: "March 2024",
    summary: "How we collect, use, and protect your personal information"
  }, {
    title: "Terms of Service",
    icon: FileText,
    lastUpdated: "March 2024",
    summary: "Terms and conditions for using our platform"
  }, {
    title: "Cookie Policy",
    icon: Eye,
    lastUpdated: "March 2024",
    summary: "Information about cookies and tracking technologies"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Legal &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Privacy
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our commitment to transparency, privacy, and compliance with global data protection standards
          </p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policies.map((policy, index) => {
            const Icon = policy.icon;
            return <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{policy.summary}</p>
                    <p className="text-xs text-gray-500">Updated: {policy.lastUpdated}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="privacy" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="privacy">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                  </div>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-6">Last updated: June 2025</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h3>
                    <p className="mb-4">
                      This Privacy Policy outlines how PLAT (Progressive Learning Ability Test), operated by Orage Digital Pvt. Ltd. (Offee), collects, uses, discloses, and protects your information when you access our services through plat.offee.in, offee.in, offee.online, and associated subdomains. By using PLAT, you consent to the data practices described in this policy.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h3>
                    <p className="mb-2 font-semibold">a. Personal Information</p>
                    <p className="mb-2">When you register or participate in assessments, we collect:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Full name, email address, contact number</li>
                      <li>Academic details (programme, semester, institution)</li>
                      <li>Gender, pin code, and other optional demographic details</li>
                    </ul>

                    <p className="mb-2 font-semibold">b. Sensitive Information</p>
                    <p className="mb-2">In the case of proctored assessments or personality evaluation tasks, we may collect:</p>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Photographs, audio/video streams, screen activity logs</li>
                      <li>Geolocation data (for identity and integrity verification)</li>
                    </ul>
                    <p className="mb-4">
                      <strong>Note:</strong> All such data is collected only after obtaining explicit consent as per institutional or regulatory policies.
                    </p>

                    <p className="mb-2 font-semibold">c. Technical & Automated Information</p>
                    <p className="mb-2">We automatically log the following to ensure secure service delivery:</p>
                    <ul className="list-disc pl-6 mb-6">
                      <li>IP address, device type, OS, and browser data</li>
                      <li>Usage activity including click patterns, time spent, and error logs</li>
                      <li>Cookie-based tracking for user preferences and performance diagnostics</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h3>
                    <p className="mb-2">The data we collect is used for:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Generating semester-wise skill scores and Career Readiness Index (CRI)</li>
                      <li>Providing personalised micro-task recommendations and development pathways</li>
                      <li>Academic reporting to institutions for performance analytics and curriculum improvement</li>
                      <li>Enhancing user experience across PLAT interfaces (student dashboard, admin reports, etc.)</li>
                      <li>Sending updates, alerts, or communication related to tests, interventions, and placements</li>
                    </ul>
                    <p className="mb-6">
                      We may also use aggregated or anonymised data for product development, institutional benchmarking, or research and publication purposes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h3>
                    <p className="mb-2">We do not sell your personal data. Your information is shared only under the following conditions:</p>
                    <ul className="list-disc pl-6 mb-6">
                      <li><strong>With Your Consent:</strong> For example, if you opt-in to share your report with potential recruiters or institutions.</li>
                      <li><strong>With Institutional Partners:</strong> Colleges and universities using PLAT may access student-specific skill data and CRI scores for internal evaluation, counselling, or placement-related interventions.</li>
                      <li><strong>With Third-Party Vendors:</strong> Such as proctoring tools or cloud infrastructure providers, bound by strict confidentiality and data protection agreements.</li>
                      <li><strong>When Required by Law:</strong> To comply with applicable legal obligations or governmental requests.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h3>
                    <p className="mb-6">
                      We employ advanced security protocols—encryption, access controls, regular audits, and intrusion detection systems—to safeguard your data. Despite our efforts, no digital transmission or storage method is 100% secure. Users are advised to maintain caution while sharing sensitive information and to report any suspicious activity immediately.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Data Access, Correction, and Deletion</h3>
                    <p className="mb-2">You may request to:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Access the personal data we hold about you</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Withdraw consent or request deletion of your data (subject to institutional and regulatory policies)</li>
                    </ul>
                    <p className="mb-6">
                      Requests may be routed through your institution or sent directly to Offee using the contact details below.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h3>
                    <p className="mb-2">PLAT uses cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Maintain session continuity</li>
                      <li>Analyse usage patterns for better UX and platform improvement</li>
                      <li>Personalise assessment navigation and feedback delivery</li>
                    </ul>
                    <p className="mb-6">
                      You can manage cookie preferences via your browser settings. Please note that disabling cookies may impact the functionality of some services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to This Privacy Policy</h3>
                    <p className="mb-6">
                      We may revise this Privacy Policy from time to time. Changes will be posted on our platforms with the updated effective date. We recommend users check this page regularly for updates.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h3>
                    <p>
                      For questions or concerns related to this Privacy Policy or your data rights, contact:
                      <br />
                      <strong>Email:</strong> info@offee.in
                      <br />
                      <strong>Address:</strong> Orage Digital Pvt. Ltd. B-601, Keshav Shristi Complex, Lal Bahadur Shastri Road, Bhandup West, Mumbai, Maharashtra 400078, India.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terms">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">Last updated: June 2025</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
                    <p className="text-gray-700 mb-6">
                      By accessing or using the PLAT services - including but not limited to platskills.com, plat.offee.in, offee.in, and offee.online - you agree to comply with and be bound by these Terms and Conditions. If you do not accept these terms, please refrain from using our services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Modification of Terms</h3>
                    <p className="text-gray-700 mb-6">
                      Orage Digital Private Limited (Offee) reserves the right to modify these Terms and Conditions at any time. Updates will be published on our platforms. Continued use of the services after changes constitutes your acceptance of the revised terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Services Provided</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Semester-wise skill-based assessments integrated with academic calendars</li>
                      <li>AI-assisted and expert-evaluated skill scorecards and upskilling insights</li>
                      <li>Analytics dashboards for students, faculty, and institutions</li>
                      <li>Micro-task ecosystem for continuous learning</li>
                      <li>Career Readiness Index (CRI) insights</li>
                      <li>SMS/email-based alerts (with opt-in consent)</li>
                      <li>Communication regarding career opportunities and institutional announcements</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      Offee may also present contextual third-party content or ads but does not endorse their accuracy or reliability.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Provide accurate, current, and complete information during registration.</li>
                      <li>Use the services in compliance with applicable laws and institutional codes of conduct.</li>
                      <li>Not misuse or attempt to disrupt PLAT's infrastructure, reports, or evaluation mechanisms.</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      PLAT and Offee reserve the right to suspend or terminate access for violations of these terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h3>
                    <p className="text-gray-700 mb-4">
                      All content, tools, platforms, designs, reports, and proprietary algorithms used in PLAT are owned or licensed by Orage Digital Pvt. Ltd. Unauthorised reproduction, distribution, or adaptation is prohibited.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Any data or content submitted by users (e.g., written responses, project uploads) remains the property of the user; however, by submitting it, you grant Offee a non-exclusive, royalty-free, global licence to use it for analytics, reporting, product development, and research, in line with our privacy policy.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Privacy and Data Security</h3>
                    <p className="text-gray-700 mb-6">
                      Your privacy is important to us. All user data is stored securely and handled in accordance with our Privacy Policy, which is incorporated by reference into these terms.
                      By using PLAT, you consent to the collection, processing, and usage of your data (including analytics and performance metrics) for educational evaluation, research, and institutional reporting.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h3>
                    <p className="text-gray-700 mb-6">
                      To the maximum extent permitted under Indian law, Orage Digital Pvt. Ltd. (Offee) shall not be held liable for any indirect, incidental, special, or consequential damages, including but not limited to data loss, system downtime, or academic consequences arising from the use of PLAT.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Refund and Cancellation Policy</h3>
                    <p className="text-gray-700 mb-6">
                      Most PLAT-related services are non-refundable. Any exceptions (such as test access issues or verified system errors) will be subject to the conditions mentioned in our official Refund Policy. Please contact your institution or Offee support for clarification.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Jurisdiction and Governing Law</h3>
                    <p className="text-gray-700 mb-6">
                      These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h3>
                    <p className="text-gray-700 mb-2">
                      For any concerns, queries, or clarifications regarding PLAT or these Terms, reach out to us at:
                    </p>
                    <div className="text-gray-700 mb-6">
                      <p><strong>Email:</strong> info@offee.in</p>
                      <p><strong>Phone:</strong> +91-9664500593</p>
                      <p><strong>Address:</strong></p>
                      <div className="ml-4">
                        Orage Digital Pvt. Ltd.,<br />
                        306, Bhairava Milestone,<br />
                        Rd Number 16U, Neheru Nagar, Wagle Industrial Estate,<br />
                        Thane, Maharashtra 400604, India.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cookies">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      Last updated: March 2024
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies?</h3>
                    <p className="text-gray-700 mb-6">
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better user experience and enable certain features 
                      of our platform.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h4>
                    <p className="text-gray-700 mb-4">
                      These cookies are necessary for the platform to function properly and cannot be 
                      switched off. They include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Authentication cookies to keep you logged in</li>
                      <li>Session cookies to maintain your preferences</li>
                      <li>Security cookies to protect against fraud</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h4>
                    <p className="text-gray-700 mb-4">
                      These cookies enable enhanced functionality and personalization:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Remembering your language preferences</li>
                      <li>Storing your dashboard customizations</li>
                      <li>Maintaining your assessment progress</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h4>
                    <p className="text-gray-700 mb-4">
                      These cookies help us understand how users interact with our platform:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Tracking page views and user journeys</li>
                      <li>Measuring platform performance</li>
                      <li>Identifying areas for improvement</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Managing Cookies</h3>
                    <p className="text-gray-700 mb-6">
                      You can control cookies through your browser settings. However, disabling certain 
                      cookies may affect the functionality of our platform. Most browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>View and delete cookies</li>
                      <li>Block cookies from specific sites</li>
                      <li>Block third-party cookies</li>
                      <li>Clear cookies when you close your browser</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h3>
                    <p className="text-gray-700 mb-6">
                      We may use third-party services that set cookies on our behalf. These include 
                      analytics providers and support tools. We ensure that these providers comply 
                      with applicable privacy laws.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-slate-300">
              We maintain the highest standards of data protection and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800 rounded-lg p-6">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-slate-300">European data protection standards</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO/IEC 27001:2022</h3>
              <p className="text-sm text-slate-300">Information security management</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-slate-300">Security and availability controls</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">FERPA Compliant</h3>
              <p className="text-sm text-slate-300">Educational records protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Inquiries</h2>
          <p className="text-xl text-gray-600 mb-8">
            For legal matters, data protection questions, or compliance inquiries
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <p className="text-gray-600">info@offee.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Legal;