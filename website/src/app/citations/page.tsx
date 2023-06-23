'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ExclamationCircleIcon, LightBulbIcon, AcademicCapIcon, PhotoIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Citations', href: '/citations' },
  { name: 'Fun Facts!', href: '/fun-facts' },
  { name: 'Solutions', href: '/solutions' },

]

const features = [
  {
    name: 'Antarctica Gov',
    description:
      '"Blue Whale." Australian Antarctic Program, 6 Sept. 2022, www.antarctica.gov.au/about-antarctica/animals/whales/blue-whale/.',
    href: 'www.antarctica.gov.au/about-antarctica/animals/whales/blue-whale/',
    icon: LightBulbIcon,
  },
  {
    name: 'World Wild Life Fund',
    description:
      '"Blue Whale." World Wildlife Fund, www.worldwildlife.org/species/blue-whale.',
    href: 'www.worldwildlife.org/species/blue-whale',
    icon: LightBulbIcon,
  },
  {
    name: 'Treehugger',
    description:
      '11 facts about blue whales, the largest animals ever on earth. (2019, July 30). Treehugger. https://www.treehugger.com/facts-about-blue-whales-largest-animals-ever-known-earth-4858813',
    href: 'https://www.treehugger.com/facts-about-blue-whales-largest-animals-ever-known-earth-4858813',
    icon: LightBulbIcon,
  },
  {
    name: 'IUCN Red List',
    description:
      '"The IUCN Red List of Threatened Species." IUCN Red List of Threatened Species, www.iucnredlist.org/species/2477/156923585#geographic-range.',
    href: 'https://www.iucnredlist.org/species/2477/156923585#geographic-range',
    icon: Bars3Icon,
  },
  {
    name: 'Madison Web Solutions',
    description:
      'Madison Web Solutions. "Everything You Need To Know About The Blue Whale Challenge." Cybersmile – Cyberbullying, www.cybersmile.org/blog/everything-you-need-to-know-about-the-blue-whale-challenge.',
    href: 'www.cybersmile.org/blog/everything-you-need-to-know-about-the-blue-whale-challenge',
    icon: PhotoIcon,
  },
  {
    name: 'Vox',
    description:
      'Resnick, Brian. "7 Ocean Mysteries Scientists Haven’t Solved Yet." Vox, 27 Apr. 2022, www.vox.com/science-and-health/23030491/ocean-scientific-mysteries-unexplainable-podcast.',
    href: 'www.vox.com/science-and-health/23030491/ocean-scientific-mysteries-unexplainable-podcast',
    icon: PhotoIcon,
  },
  {
    name: 'NOAA',
    description:
    '"Blue Whale." NOAA, www.fisheries.noaa.gov/species/blue-whale.',
    href: 'www.fisheries.noaa.gov/species/blue-whale.',
    icon: PhotoIcon,
  },
  {
    name: 'NOAA (Rice\'s Whale)',
    description:
    '"Rice\'s Whale." NOAA, www.fisheries.noaa.gov/species/rices-whale.'    ,
    href: 'www.fisheries.noaa.gov/species/rices-whale',
    icon: PhotoIcon,
  },
  {
    name: 'Rice\'s Whale',
    description:
    '"Rice\'s Whale." Defenders of Wildlife, defenders.org/wildlife/rices-whale.',
    href: 'https://defenders.org/wildlife/rices-whale',
    icon: PhotoIcon,
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-blend-luminosity">
      <div className="bg-gray-900 z-50">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Blue Whale</span>
                <img
                  className="h-8 w-auto"
                  src="life-preserver.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/" className="text-sm font-semibold leading-6 text-white">
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Blue Whales</span>
                  <img
                    className="h-8 w-auto"
                    src="life-preserver.svg"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      <section>
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-400">Balaenoptera musculus</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Citations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Where I get all of the info 
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a href={`https://${feature.href}`} className="text-sm font-semibold leading-6 text-blue-400">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}
