'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, HelpCircle, PlusCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Replace with actual extension download URL
    const downloadUrl = '/Ocean.zip';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'ocean-extension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProxyDownload = () => {
    // Replace with actual extension download URL
    const downloadUrl = '/proxy changer.zip';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'proxy-changer.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Add these new handler functions alongside handleDownload

  const handlePcCoolDownload = () => {
    const downloadUrl = '/PC COOL.bat';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'pc-cool.bat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChromeTrickDownload = () => {
    const downloadUrl = '/Chrome trick.bat';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'chrometrick.bat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <Head>
        <title>Ocean - IRCTC Ticket Booking Extension</title>
        <meta name="description" content="IRCTC ticket booking ke liye Ocean extension - easy, fast aur secure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-100/95 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo2.png" alt="Ocean Logo" width={100} height={100} />
            <span className="text-2xl font-bold text-black">Ocean</span>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Karein
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 pt-20 px-4">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block">IRCTC Ticket Booking</span>
                <span className="text-blue-200">Simple aur Fast</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Ocean extension ke sath apni train ticket booking ko easy banaye.
              </p>

              {/* WhatsApp Contact Info */}
              <div className="flex items-center gap-2 bg-green-600/20 p-3 rounded-lg border border-green-400/30 backdrop-blur-sm">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-green-100">
                  WhatsApp Support: <a href="https://wa.me/12769309692" className="text-white font-bold underline hover:text-green-200">+1 2769309692</a>
                </span>
              </div>

              <div className="pt-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" onClick={handleDownload}>
                  <Download className="mr-2 h-5 w-5" />
                  Abhi Download Karein
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/demo.jpg"
                alt="Ocean Extension Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Dekho Kaise Work Karta Hai
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorial Section */}
        <section className="py-20 bg-white px-4" id="tutorial">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Video Tutorial</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Ocean extension ka use karne ka tarika janne ke liye hamara video tutorial dekho.
            </p>

            <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-blue-100">
              <video src='/video.mp4' autoPlay controls></video>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-20 bg-blue-50 px-4" id="installation">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">Installation Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
              Chrome mein Ocean extension install karne ke liye neeche diye gaye easy steps follow karein.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Extension Download Karein",
                  description: "Sabse pehle 'Download Karein' button par click karke Ocean extension ki zip file download karein.",
                  icon: <Download className="h-12 w-12 text-blue-500" />
                },
                {
                  title: "Chrome Extension Page Open Karein",
                  description: "Chrome browser mein, 'chrome://extensions/' par jayen aur Developer Mode ko on karein.",
                  icon: <PlusCircle className="h-12 w-12 text-blue-500" />
                },
                {
                  title: "Extension Load Karein",
                  description: "'Load Unpacked' par click karein aur unzip kiye gaye Ocean extension folder ko select karein.",
                  icon: <CheckCircle className="h-12 w-12 text-blue-500" />
                }
              ].map((step, index) => (
                <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-bold text-blue-800 mt-4">Step {index + 1}: {step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center flex justify-center gap-8">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Extension Download Karein
              </Button>
              <Button className="bg-orange-700 hover:bg-orange-800 text-white" onClick={handleProxyDownload}>
                <Download className="mr-2 h-4 w-4" />
                Proxy Changer
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handlePcCoolDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download PC Cool
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleChromeTrickDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Chrome Trick
              </Button>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Features</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fast Booking",
                  description: "Tatkal ticket booking ke liye optimized, milliseconds mein form fill karein."
                },
                {
                  title: "Auto-Fill Profile",
                  description: "Apni passenger information save karein aur baar-baar form bharne se bachein."
                },
                {
                  title: "Ticket Alerts",
                  description: "Ticket availability ke liye real-time alerts receive karein."
                },
                {
                  title: "Secure Payment",
                  description: "Apki payment information secure rahegi aur fast checkout experience milega."
                },
                {
                  title: "Offline Support",
                  description: "Internet connection na hone par bhi form data save rahega."
                },
                {
                  title: "User Friendly",
                  description: "Simple aur intuitive interface, kisi bhi user ke liye easy hai."
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-blue-600 border-none shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 hover:bg-blue-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">User Reviews</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amit Sharma",
                  role: "Regular Traveler",
                  testimonial: "Ocean extension use karne ke baad, main hamesha tatkal ticket pane mein successful raha hoon. Bahut hi useful tool!"
                },
                {
                  name: "Priya Patel",
                  role: "Business Traveler",
                  testimonial: "Meri journey ko ab aur bhi easy bana diya hai. Auto-fill feature bahut time bachata hai."
                },
                {
                  name: "Rahul Gupta",
                  role: "Student",
                  testimonial: "Ab tak ka best IRCTC extension. Maine apne sabhi friends ko iske bare mein bataya hai!"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-blue-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-blue-50 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  question: "Kya Ocean extension secure hai?",
                  answer: "Haan, Ocean extension fully secure hai. Ye aapke data ko local storage mein secure rakhta hai aur koi bhi sensitive information external servers par nahi bhejta hai."
                },
                {
                  question: "Kya ye mobile par work karta hai?",
                  answer: "Currently, Ocean extension sirf desktop Chrome browser ke liye available hai. Mobile version development ke under hai."
                },
                {
                  question: "Kya main extension ko update kar sakta hoon?",
                  answer: "Haan, jab bhi new update available hogi, aap website se latest version download kar sakte hain."
                },
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-blue-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ab apni IRCTC ticket booking ko easy banaye</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ocean extension ke sath tatkal ticket pane ki chances badhaye.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" onClick={handleDownload}>
              <Download className="mr-2 h-5 w-5" />
              Abhi Download Karein
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-200 text-black py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Ocean Logo" width={30} height={30} />
                <span className="text-xl font-bold">Ocean</span>
              </div>
              <p className="text-blue-800">
                IRCTC ticket booking ke liye sabse easy aur fast Chrome extension.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#tutorial" className="text-blue-600 hover:text-black transition-colors">Video Tutorial</a></li>
                <li><a href="#installation" className="text-blue-600 hover:text-black transition-colors">Installation Guide</a></li>
                <li><a href="#" className="text-blue-600 hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-blue-300 mb-2">support@oceanextension.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-400">
            <p>© {new Date().getFullYear()} Ocean Extension. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
