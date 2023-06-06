import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const navigation = [
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Citations', href: '/citations' },
  { name: 'Fun Facts!', href: '/fun-facts' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Home', href: '/' },

]


export const metadata = {
  title: 'Blue Whales',
  description: 'The website for teaching the people, about blue whales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
              {navigation.map((item) => (
                <div key={item.name} className="pb-6">
                  <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              2023 Kiet Lai, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

