'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ExclamationCircleIcon, LightBulbIcon, AcademicCapIcon, PhotoIcon} from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAmericasIcon,
  LinkIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  PhoneIcon,
  LifebuoyIcon,
  NewspaperIcon
} from '@heroicons/react/20/solid'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Citations', href: '/citations' },
  { name: 'Fun Facts!', href: '/fun-facts' },
  { name: 'Solutions', href: '/solutions' },
]

const cards = [
  {
    name: 'IUCN Status',
    description: 'The Blue whale has more individuals making it less endangered and has more habitat to survive. Rice\'s Whale is critically endangered because lots of oil pollution occurs in there habitats compared to the Blue Whales making the Rice\'s Whale population much lower.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Date Discovered',
    description: 'Rice\'s Whale was found very recently in the past 5 years while the Blue Whale have been known of for decades.',
    icon: NewspaperIcon,
  },
  {
    name: 'Their Role In the Ecosystem',
    description: 'Rice\'s Whales role in the ecosystem is as a forager that eats dead things (Not much is known about them). The Blue Whales role in the Ecosystem is to eat up as much krill as possible which keeps the krill population under control as well as prevents over exersion on plankton populations.',
    icon: GlobeAmericasIcon,
  },
]


const importances = [
  {
    name: 'Food Source.',
    description:
      'Higher level consumers such as Orcas, and Sharks will die off because of the decline in food to eat.',
    icon: ArrowTrendingDownIcon,
  },
  {
    name: 'Population Control',
    description: 'As a major consumer of krill, 6 tons a day, if they died off the krill population would explode which would strain the population of plankton',
    icon: ArrowTrendingUpIcon,
  },
 
]

const causes = [
  {
    name: 'Ship Strikes',
    description: 'happens when a ship hits a whales, it can cause the whale harm or kills it. It happens most often in coastal areas.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Entanglement in Fishing Gear',
    description: 'happens when the whales gets stuck or entangled in the fishing gear, killing them from fatigue, compromised feeding ability, or severe injury.',
    icon: LinkIcon,
  },
  {
    name: 'Whaling',
    description: 'is now illegal but was the hunting of whales for blubber and whale meat. Over hunting them led to a sharp population decline of whales.',
    icon: ArrowTrendingDownIcon,
  },
  {
    name: 'Loss of Habitat',
    description: 'pushes them to go closer to where humans and shipping lanes are this increases the frequency of Ship Strikes and Entanglements.',
    icon: ArrowTrendingDownIcon,
  },
  {
    name: 'Warming Oceans',
    description: 'Warming of the oceans kills krill because they can\'t stand the warmth. Killing the krill means there is less food for the whales to eat. Leading to some dying from starvation',
    icon: ArrowTrendingUpIcon,
  },
  
  {
    name: 'Pollution',
    description: 'Pollutation can kill of krill leading to even less food to go around. It also harms whales from eating plastics and other forms of pollution can also harm them.',
    icon: ArrowTrendingUpIcon,
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-blend-luminosity">
      <div className="bg-gray-900 z-50">
        <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-lg">
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
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-8 pt-32 text-center'>
          <h1 className='text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-600 sm:text-9xl'>Learn More</h1>
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                The Blue Whales Range
              </h1>
              <p className="mt-6 text-2xl leading-8 text-gray-300 font-bold">
                The blue whales range has declined in the past 50 years (The range is in blue)
              </p>
            </div>
            <img
              src="https://www.fisheries.noaa.gov/s3/styles/original/s3/dam-migration/blue_whale_range.png?itok=smjeem23"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 mix-blend-multiply"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      </section>
      <section>
        <div className="bg-gray-900 py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-2xl font-bold leading-7 text-blue-400">The Population</h2>
              <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-5xl">Population Decline & All the Reasons</h1>
              <p className="mt-6 text-3xl leading-8 text-gray-300">
                The blue whales <span className='font-bold'>decline</span> is caused <span className='font-bold'>mainly by humans</span>.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-3">
            <div className="mx-auto max-w-8xl px-6 lg:px-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Blue_Whale_population%2C_Pengo.svg/2560px-Blue_Whale_population%2C_Pengo.svg.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10 scale-80 bg-white scale-[.78]"
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-gray-900 pt-[2%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {causes.map((cause) => (
                <div key={cause.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <cause.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                    {cause.name}
                  </dt>{' '}
                  <dd className="inline">{cause.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section>
        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="bg-transparent">
              <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="opacity-40 absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                  >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                      <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#3b82f6" />
                        <stop offset={1} stopColor="#3b82f6" />
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Why is the Blue Whales <span className='underline'>Diet</span> so important to the <span className='underline'>decline</span> in the Population?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      The blue whales enormous dietary need of around <span className='font-bold'>6 tons</span> of krill a day. Means that if there is a decline in krill popluation it can lead to many Whales starving, or dying.
                    </p>
                  </div>
                  <div className="relative mt-16 h-80 lg:mt-8">
                    <img
                      className="scale-[.45] -left-3/4 -top-64 lg:scale-50 absolute lg:-left-32 lg:-top-24 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                      src="https://oceanservice.noaa.gov/education/marine-ecosystem-modeling-vr/ocean-food-webs/fig7-fwd-montereybay-habitat.png"
                      alt="Blue whale eating krill"
                      width={1824}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
     </section>
      <section>
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-2xl font-semibold leading-7 text-blue-400">Importance</h2>
                  <p className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-5xl">Why is the Blue Whale so important to the ecosystem?</p>
                  <p className="mt-6 text-2xl leading-8 text-gray-300">
                    They are important for many reasons like <span className='font-bold'>Population control</span> and as a <span className='font-bold'>Food source</span>
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {importances.map((importance) => (
                      <div key={importance.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                          <importance.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                          {importance.name}
                        </dt>{' '}
                        <dd className="inline">{importance.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="https://www.cybersmile.org/wp-content/uploads/Everything-You-Need-To-Know-About-The-Blue-Whale-Challenge.jpg"
                alt="A whale"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            src="https://defenders.org/sites/default/files/styles/meta_image/public/2021-05/Gulf%20of%20Mexico%20Whale%20-%20Rice%27s%20Whale%20-%20NOAA%20-%20header.jpg?itok=EYbdFQog"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-40"
          />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-400 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-sky-400 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-blue-500 sm:text-2xl">A Close Relative</h2>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Rice&apos;s Whale</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Rices whale is a close relative to the Blue Whale that was recently discovered. Scientifically known as the Balaenoptera ricei. They are <span className='font-bold text-white text-xl'>Critically Endangered!</span>
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl"><br />A Quick Comparison between Rice&apos;s Whale and Blue Whale</h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                  <card.icon className="h-7 w-5 flex-none text-blue-400" aria-hidden="true" />
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-white">{card.name}</h3>
                    <p className="mt-2 text-gray-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <img
            src="https://files.worldwildlife.org/wwfcmsprod/images/Blue_Whale/story_full_width/2x7x8ynwvz_shutterstock_764499823.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4af5a5] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#1ee7dd] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">What if Blue Whales went <span className='underline'>Extinct</span>?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              If they were to become extinct it would lead to a large dying off of Orcas (Killer Whales) and other higher level consumers that depend on whales for food. & Explosive population boom from Krill which strains that amount of Plantkon in the water killing off even more animals that rely on it.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-transparent">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-zinc-950 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Learn About the Solutions Next.
              </h2>
             
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/solutions"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Solutions
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#1ee7dd" />
                    <stop offset={1} stopColor="#776fff" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}
