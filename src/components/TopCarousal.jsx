"use client"

const TopCarousel = () => {
  const slides = [
    {
      image: "public/college.webp",
      title: "Suryodaya Campus",
      description: "Modern Engineering Excellence",
    },
    {
      image: "public/Labs.jpg",
      title: "Advanced Laboratories",
      description: "State-of-the-Art Facilities",
    },
    {
      image: "public/robo-hand.JPG",
      title: "Innovation Hub",
      description: "Technology & Research Center",
    },
    {
      image: "public/learn.JPG",
      title: "Learning Environment",
      description: "Academic Excellence",
    },
    {
      image: "public/Campus.JPG",
      title: "Campus Life",
      description: "Holistic Development",
    },
  ]

  return (
    <div className="top-carousel">
      <div className="top-carousel-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="top-carousel-slide">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
            <div className="top-carousel-overlay">
              <div className="top-carousel-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCarousel
