import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHanderler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle(' ')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1)

    setTask(copytask)
  }


  return (
    <div className='h-screen flex flex-col  lg:flex-row  bg-black text-white'>

      <form onSubmit={(e) => {
        submitHanderler(e)
      }}
        className='flex lg:w-1/2 items-start flex-col gap-4 p-10'>
        <h1 className='text-4xl mb-2 font-bold'>Your Notes</h1>

        <input
          type="text"
          placeholder='Enter notes heading'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'

          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 py-2 h-32 w-full flex font-medium flex-row items-start outline-none border-2 rounded'
          placeholder='Write details'

          value={details}
          onChange={(e) => {
            setDetails(e.target.value)

          }}
        />

        <button
          className='bg-white active:scale-105   w-full font-medium text-black px-5 py-3 outline-none rounded'
        >
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-3 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div
              key={idx}
              className="flex justify-between flex-col items-start relative bg-cover h-65 w-55 text-black pt-10 pb-5 px-6 rounded-2xl bg-[url('https://w7.pngwing.com/pngs/112/62/png-transparent-paper-notepad-notebook-book-notepad-brown-and-white-spiral-pad-illustration-miscellaneous-angle-text-thumbnail.png')]">
              <div>
                <h3
                  className='leading-tight text-lg font-bold'
                >
                  {elem.title}
                </h3>
                <p
                  className='mt-2 leading-tight text-sm font-semibold text-gray-600'
                >
                  {elem.details}
                </p>
              </div>
              <button
                onClick={() => {
                  deleteNote(idx)
                }}
                className='w-full bg-red-600 cursor-pointer active:scale-95 py-1 text-xs rounded-2xl font-bold text-white'
              >
                Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App


