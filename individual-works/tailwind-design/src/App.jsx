import { useState } from 'react'
import Header from './components/Header/Header'
import TextOne from './components/Body/TextOne'
import TextTwo from './components/Body/TextTwo'
import TextThree from './components/Body/TextThree'
import Image from './assets/image.png'
import Image2 from './assets/image2.png'

function App() {
  const [count, setCount] = useState(0)
  const textOne = [
    {
      label: "Fast Performance",
    },
    {
      label: "Partnership deal",
    },
    {
      label: "Pro Subscription",
    },
    {
      label: "Customer Support",
    },
  ];
  const textTwo = [
    {
      label: "Smart Features",
    },
    {
      label: "Secure Contents",
    },
  ]
  const textThree = [
    {
      label: "Fast Performance",
      content: "Let's just get this out of the way- there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world"
    },
    {
      label: "Pro Subscription",
      content: "We believe it's important for everyone to have acces to software - especially when it comes to digital learning be navigated by keyboard and screen readers"
    },
    {
      label: "Partnership deal",
      content: "Let's just get this out of the way- there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world"
    },
    {
      label: "Customer Support",
      content: "We believe it's important for everyone to have acces to software - especially when it comes to digital learning be navigated by keyboard and screen readers"
    }
  ]

  return (
    <div className="App">
      <Header />
      <main>
      <div className="mx-auto pt-20 text-6xl font-bold text-center">
      Top Quality Digital <br/> Products To Explore
    </div>
    <div className="mx-auto pt-6 text-lg text-center max-w-lg leading-loose">
      Get your blood tests delivered at let home collect sample from the victory of managements that supplies best design system guidelines ever.
    </div>
    <div className="flex justify-center">
      <button className="mt-6 px-6 py-2 text-lg text-center border rounded-full bg-pink-500 text-white hover:bg-pink-700">
        Explore
      </button>
    </div>
    <img className="mx-auto w-1/2 mt-20 drop-shadow-2xl rounded-lg" src={Image} alt="literally a screenshot"/>
    <div className="flex justify-center mt-32 uppercase text-red-600 font-bold text-sm">
      whats the function
    </div>
    <div className="flex justify-center mt-3 text-3xl font-bold">
      Meet the feature of the product
    </div>
    <div className="mx-auto mt-16 grid grid-cols-2 xl:grid-cols-4 w-2/3">
    {textOne.map((textOne) => (
      <TextOne label={textOne.label} />
    ))}
    </div>
    <div className="flex w-2/3 mx-auto mt-32 flex-col xl:flex-row">
      <img className="rounded-xl mx-auto object-contain" src={Image2} alt="screenshot numero dos"/>
      <div className="ml-32">
        <div className="mx-auto mt-4 uppercase text-red-600 font-bold text-sm">our services</div>
        <div className="mt-3 text-4xl font-bold"> Business Goals <br/>Achieved with Design</div>
          {textTwo.map((textTwo) => (
            <TextTwo label={textTwo.label} />
          ))}
      </div>
    </div>
    <div className="flex justify-center mt-32 uppercase text-red-600 font-bold text-sm">quality features</div>
    <div className="flex justify-center mt-3 text-3xl font-bold mb-16">Amazing useful features</div>
    <div className="grid lg:grid-cols-2 xl:w-7/12 w-3/4 mx-auto mb-32">
        {textThree.map((textThree) => (
          <TextThree label={textThree.label} content={textThree.content} />
        ))}
    </div>
      </main>
    </div>
  )
}

export default App
