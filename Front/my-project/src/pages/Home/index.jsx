import Hero from '../../components/Hero'
import ThingsToDo from '../../components/ThingsToDo'
import ThingCard from '../../components/ThingCard'
import signUp from '../../assets/icons/sign-up.svg'
import money from '../../assets/icons//money.svg'
import travel from '../../assets/icons/location-things.svg'
import lineOrange from '../../assets/icons/orange.svg'
import lineBlue from '../../assets/icons/blue.svg'
import lineYellow from '../../assets/icons//yellow.svg'
import './styles.sass'

const thingsToDoList = [
  {
    icon: signUp,
    line: lineOrange,
    title: 'Sign Up',
    description: 'Completes all the work associated with planning and processing'
  },
  {
    icon: money,
    line: lineBlue,
    title: 'Worth of Money',
    description: 'After successful access then book from exclusive deals & pricing'
  },
  {
    icon: travel,
    line: lineYellow,
    title: 'Exciting Travel',
    description: 'Start and explore a wide range of exciting travel experience.'
  }
]

const Home = () => {
  return (
    <section>
      <Hero />
      <ThingsToDo>
        {
          thingsToDoList.map((item, index) => (
            <ThingCard key={index} details={item} />
          ))
        }
      </ThingsToDo>
    </section>
  )
}

export default Home
