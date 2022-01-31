import Category from "../components/Category"

function Categories({categories}) {
    const allCategories = categories.data.categories

  return (
  <div>
      <h1>Categorias</h1>
     {allCategories.map(category => (
          <Category category={category} key={category.id}/>
      ))} 
  </div>
  )
}

export async function getServerSideProps(){
    const categorieUrl = `${process.env.API_URL}/categories`
    const response = await fetch(categorieUrl)
    const categories = await response.json()

    return {
        props: {categories: categories}
    }


}

export default Categories;
