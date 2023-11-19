import PropTypes from 'prop-types'
import './styles.sass'

const BlogCard = ({ details }) => {
  BlogCard.propTypes = {
    details: PropTypes.object
  }

  return (
    <article className='blog-card'>
      <img className='blog-card__image' src={details.image} alt='destiny image' />
      <div className='blog-card__body'>
      <p className='blog-card__body--title'>{details.title}</p>
        <span className='blog-card__body--text'>{details.date}</span>
      </div>
    </article>
  )
}

export default BlogCard
