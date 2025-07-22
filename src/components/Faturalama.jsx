const Faturalama = () => {
  return (
    <div className="md:flex md:items-center mb-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Bilgiler
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-amber-400">
              Colhead1
            </th>
            <th scope="col" className="px-6 py-3 bg-red-500">
              Colhead2
            </th>
            <th scope="col" className="px-6 py-3  bg-amber-400">
              Colhead3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">Col1</td>
            <td className="px-6 py-4">Col2</td>
            <td className="px-6 py-4">Col3</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">Col1</td>
            <td className="px-6 py-4">Col2</td>
            <td className="px-6 py-4">Col3</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">Col1</td>
            <td className="px-6 py-4">Col2</td>
            <td className="px-6 py-4">Col3</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Col1</td>
            <td className="px-6 py-4">Col2</td>
            <td className="px-6 py-4">Col3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Faturalama
