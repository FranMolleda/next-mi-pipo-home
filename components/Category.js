import React from 'react';
import Link from "next/link"

function Category({category}) {
    const {name} = category
  return (
  <main>
      <h1>Desde category</h1>

      <div>
          <Link href={`/categories/${name}`}><a>{name}</a></Link>
          <h5></h5>
      </div>
  </main>)
}

export default Category;
