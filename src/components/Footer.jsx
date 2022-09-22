import React from 'react'

const footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
          <footer>
              <p>Copyright C {currentYear}</p>
      </footer>
    </div>
  )
}

export default footer
