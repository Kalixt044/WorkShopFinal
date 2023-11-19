import Hero from '../../components/Hero'
import ThingsToDo from '../../components/ThingsToDo'
import ThingCard from '../../components/ThingCard'
import signUp from '../../assets/icons/sign-up.svg'
import money from '../../assets/icons//money.svg'
import travel from '../../assets/icons/location-things.svg'
import Deals from '../../components/Deals'
import Vacations from '../../components/Vacations'
import AboutUs from '../../components/AboutUs'
import Blog from '../../components/Blog'
import BlogCard from '../../components/BlogCard'
import blogImage1 from '../../assets/images/blog1.svg'
import blogImage2 from '../../assets/images/blog2.svg'
import blogImage3 from '../../assets/images/blog3.svg'
import blogImage4 from '../../assets/images/blog4.svg'
import './styles.sass'
import Subscription from '../../components/Subscription'

const thingsToDoList = [
  {
    icon: signUp,
    title: 'Sign Up',
    description: 'Completes all the work associated with planning and processing'
  },
  {
    icon: money,
    title: 'Worth of Money',
    description: 'After successful access then book from exclusive deals & pricing'
  },
  {
    icon: travel,
    title: 'Exciting Travel',
    description: 'Start and explore a wide range of exciting travel experience.'
  }
]

const articles = [
  {
    image: blogImage1,
    title: 'The Amazing Difference a Year of Travelling.',
    date: 'July 27, 2021'
  },
  {
    image: blogImage2,
    title: 'Travel far enough, you meet yourself.',
    date: 'July 27, 2021'
  },
  {
    image: blogImage3,
    title: 'How to Save Money While Visiting Africa .',
    date: 'July 27, 2021'
  },
  {
    image: blogImage4,
    title: 'Reflections on 5 Months of Travel: Time to Hang',
    date: 'July 27, 2021'
  },
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
      <Deals/>
      <Vacations />
      <AboutUs />
      <Blog>
        {
          articles.map((article, index) => (
            <BlogCard key={index} details={article} />
          ))
        }
      </Blog>
      <Subscription />
    </section>
  )
}

export default Home
