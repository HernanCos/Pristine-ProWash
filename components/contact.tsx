import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Request a Free Quote</h3>

            {/* Jobber Form Placeholder */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input type="text" id="name" className="w-full p-3 bg-gray-700 rounded-md" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium">
                    Service Needed
                  </label>
                  <select id="service" className="w-full p-3 bg-gray-700 rounded-md">
                    <option value="">Select a service</option>
                    <option value="roof">Roof Soft Washing</option>
                    <option value="gutter">Gutter Cleaning & Brightening</option>
                    <option value="driveway">Driveway & Concrete Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">Upload Photos (optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">PNG, JPG or JPEG (MAX. 5MB)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" multiple />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-opacity-90"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Service Area</h3>

            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
              <div className="relative h-[300px]">
                <Image
                  src="/images/map.png"
                  alt="Service area map showing Portland and Eugene, Oregon with surrounding neighborhoods"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:9712806104" className="text-gray-300 hover:text-cyan transition-colors">
                    (971) 280-6104
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:hernancoslag@gmail.com" className="text-gray-300 hover:text-cyan transition-colors">
                    hernancoslag@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Service Areas</h4>
                  <p className="text-gray-300">Portland, Eugene, and surrounding areas within a 30-mile radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
