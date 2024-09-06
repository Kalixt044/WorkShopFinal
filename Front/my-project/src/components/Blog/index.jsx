import PropTypes from 'prop-types'
import './styles.sass'

const Blog = ({ children }) => {
  Blog.propTypes = {
    children: PropTypes.array
  }

  return (
    <section className='blog'>
      <div className='info-wrapper'>
        <h2 className='blog__title'>Get update with <span>latest blog</span></h2>
      </div>
      <div className='blog__cards-container'>
        { children }
      </div>
    </section>
  )
}

export default Blog
