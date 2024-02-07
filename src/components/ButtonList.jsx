
const ButtonList = () => {
  const listItems = ['All','Live','Comedy','Music','Algorithems','Web Development','Sports','Badminton','Politics','Romance']
  return (
    <div className="flex">
      {listItems.map((items,i) => 
        <button key={i} className="px-3 py-1 mx-2 rounded-lg bg-gray-200">{items}</button>
      )}
    </div>
  )
}

export default ButtonList