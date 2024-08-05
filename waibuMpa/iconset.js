const mapping = {
  house: 'fa-solid fa-house-chimney'
}

function iconset (ctx) {
  return {
    name: 'fontawesome',
    css: [
      'waibuFontawesome.virtual:/fa-free/css/fontawesome.min.css',
      'waibuFontawesome.virtual:/fa-free/css/regular.min.css',
      'waibuFontawesome.virtual:/fa-free/css/brands.min.css',
      'waibuFontawesome.virtual:/fa-free/css/solid.min.css'
    ],
    mapping
  }
}

export default iconset
