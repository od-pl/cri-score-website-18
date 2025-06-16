
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, FileText, Eye, Globe, AlertCircle } from "lucide-react";

const Legal = () => {
  const policies = [
    {
      title: "Privacy Policy",
      icon: Shield,
      lastUpdated: "March 2024",
      summary: "How we collect, use, and protect your personal information"
    },
    {
      title: "Terms of Service",
      icon: FileText,
      lastUpdated: "March 2024",
      summary: "Terms and conditions for using our platform"
    },
    {
      title: "Data Protection",
      icon: Lock,
      lastUpdated: "March 2024",
      summary: "Our commitment to data security and GDPR compliance"
    },
    {
      title: "Cookie Policy",
      icon: Eye,
      lastUpdated: "March 2024",
      summary: "Information about cookies and tracking technologies"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{policy.summary}</p>
                    <p className="text-xs text-gray-500">Updated: {policy.lastUpdated}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="privacy" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="data">Data Protection</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="privacy">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      Last updated: March 2024
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
                    <p className="text-gray-700 mb-4">
                      We collect information you provide directly to us, such as when you create an account, 
                      take assessments, or contact us for support. This may include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Personal information (name, email, phone number)</li>
                      <li>Educational information (college, course, academic records)</li>
                      <li>Assessment data and responses</li>
                      <li>Usage information and platform interactions</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
                    <p className="text-gray-700 mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Provide and improve our services</li>
                      <li>Generate personalized skill assessments and recommendations</li>
                      <li>Communicate with you about our services</li>
                      <li>Analyze usage patterns to enhance platform functionality</li>
                      <li>Comply with legal obligations</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h3>
                    <p className="text-gray-700 mb-6">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy. We may share information with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Your educational institution (with your consent)</li>
                      <li>Service providers who assist us in operating our platform</li>
                      <li>Legal authorities when required by law</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
                    <p className="text-gray-700 mb-6">
                      We implement appropriate security measures to protect your information, including 
                      encryption, access controls, and regular security audits. However, no method of 
                      transmission over the internet is 100% secure.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                    <p className="text-gray-700 mb-6">
                      You have the right to access, update, or delete your personal information. 
                      You may also opt out of certain communications from us. To exercise these rights, 
                      please contact us at privacy@offee.in.
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
                    <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      Last updated: March 2024
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h3>
                    <p className="text-gray-700 mb-6">
                      By accessing and using PLAT (Progressive Learning Ability Test), you accept and agree 
                      to be bound by these Terms of Service. If you do not agree to these terms, 
                      you may not use our services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Description of Service</h3>
                    <p className="text-gray-700 mb-6">
                      PLAT provides AI-powered career readiness assessment and skill development tools 
                      for educational institutions and students. Our platform evaluates skills across 
                      cognitive, functional, adaptive, social-emotional, and literacy dimensions.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Provide accurate and truthful information</li>
                      <li>Maintain the confidentiality of your account credentials</li>
                      <li>Use the platform only for its intended educational purposes</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Respect the intellectual property rights of others</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h3>
                    <p className="text-gray-700 mb-4">You may not use our platform to:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Share or distribute assessment content without authorization</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with the platform's functionality or security</li>
                      <li>Use the platform for commercial purposes without our consent</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h3>
                    <p className="text-gray-700 mb-6">
                      All content, features, and functionality of PLAT are owned by Offee Technologies 
                      and are protected by intellectual property laws. You may not reproduce, distribute, 
                      or create derivative works without our written permission.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                    <p className="text-gray-700 mb-6">
                      To the maximum extent permitted by law, Offee Technologies shall not be liable 
                      for any indirect, incidental, special, consequential, or punitive damages arising 
                      from your use of the platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lock className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Data Protection</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">
                      Last updated: March 2024
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR Compliance</h3>
                    <p className="text-gray-700 mb-6">
                      We are committed to complying with the General Data Protection Regulation (GDPR) 
                      and other applicable data protection laws. We process personal data lawfully, 
                      fairly, and transparently.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Processing Principles</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li><strong>Lawfulness:</strong> We process data only when we have a legal basis</li>
                      <li><strong>Purpose Limitation:</strong> Data is used only for specified purposes</li>
                      <li><strong>Data Minimization:</strong> We collect only necessary information</li>
                      <li><strong>Accuracy:</strong> We keep data accurate and up-to-date</li>
                      <li><strong>Storage Limitation:</strong> Data is kept only as long as necessary</li>
                      <li><strong>Security:</strong> Appropriate security measures protect data</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
                    <p className="text-gray-700 mb-4">We implement comprehensive security measures including:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>AES-256 encryption for data in transit and at rest</li>
                      <li>Multi-factor authentication for administrative access</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response procedures</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Breach Response</h3>
                    <p className="text-gray-700 mb-6">
                      In the unlikely event of a data breach, we have procedures in place to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Detect and contain the breach within 24 hours</li>
                      <li>Assess the risk and impact on affected individuals</li>
                      <li>Notify relevant supervisory authorities within 72 hours</li>
                      <li>Inform affected individuals without undue delay</li>
                      <li>Take remedial action to prevent future breaches</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">International Data Transfers</h3>
                    <p className="text-gray-700 mb-6">
                      When we transfer data internationally, we ensure appropriate safeguards are in place, 
                      such as adequacy decisions, standard contractual clauses, or other approved mechanisms.
                    </p>
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
              <h3 className="font-semibold mb-2">ISO 27001</h3>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Legal Department</h3>
                <p className="text-gray-600">legal@offee.in</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h3>
                <p className="text-gray-600">privacy@offee.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
