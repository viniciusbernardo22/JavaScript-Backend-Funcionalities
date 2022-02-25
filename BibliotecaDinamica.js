const booksByCategory = [
  {
    category: 'Terror',
    books: [
      {
        title: 'O vilarejo',
        author: 'Raphael Montes'
      },
      {
        title: 'O bebê de Rosamery',
        author: 'Ira Levin'
      },
      {
        title: 'Horror em Amityville',
        author: 'Jay Anson'
      },
      {
        title: 'A menina submersa',
        author: 'Caitlin Keirnan'
      }
    ]
  },

  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'A arte de ligar o foda-se',
        author: 'Mark Manson'
      },
      {
        title: 'Mindset: A nova Psicologia do sucesso',
        author: 'Carol S. Dweck'
      },
      {
        title: 'AntiFrágil',
        author: 'Nassim Nicholas Taleb'
      },
      {
        title: 'Terapia Cognitivo-Comportamental',
        author: 'Judith S. Beck'
      }
    ]
  },

  {
    category: 'Linguagens de programação',
    books: [
      {
        title: 'Codigo Limpo - Habilidades práticas do Agile Software',
        author: 'Robert C. Martin'
      },
      {
        title: 'Introdução à programação com linguagem C',
        author: 'Rodrigo de Barros Paes'
      },
      {
        title: 'Introdução à programação orientada a objetos usando Java',
        author: 'Rafael Santos'
      },
      {
        title: 'Série Cientista de dados - Python',
        author: 'Rafael Santos'
      }
    ]
  },

  {
    category: 'Filosofia',
    books: [
      {
        title: 'Critica da Razão Pura',
        author: 'Immanuel Kant'
      },
      {
        title: 'A republica',
        author: 'Platão'
      },
      {
        title: 'Assim falou Zaratustra',
        author: 'Friedrich Nietzsche'
      },
      {
        title: 'Sociedade do cansaço',
        author: 'Byung-Chul Han'
      }
    ]
  },
  {
    category: 'Biologia',
    books: [
      {
        title: 'A Origem das Espécies',
        author: 'Charles Darwin'
      },
      {
        title: 'O Gene Egoísta',
        author: 'Richard Dawkins'
      },
      {
        title: 'Biologia Marinha',
        author: 'Peter Castro; Michael E. Huber'
      },
      {
        title: 'Molecular Biology of the Cell',
        author: 'Bruce Alberts'
      }
    ]
  }
]

const totalCategories = booksByCategory.length
console.log('Total de Categorias de livros: ', totalCategories)
for (let category of booksByCategory) {
  console.log('Total de livros da Categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('Total de autores: ', authors.lenght)
}
countAuthors()

function booksOfAuthor(author) {
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}
booksOfAuthor('Caitlin Keirnan')
