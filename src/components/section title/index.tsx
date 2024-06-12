import './index.scss';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='section-title my-3'>
      <div className="container">
      <div className="br"></div>
      <h1 className='px-1 px-md-2'>{title}</h1>
      </div>
    </div>
  )
}

export default SectionTitle;