import React from 'react'

const PlayerCard = ({ players }) => {
  console.log(players, 'PlayerCard')
  console.log(players.palamres, 'plamares fjdsakjfjsdfa')

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="ml-10 mb-20">
      <ul className="">
        <li className="mb-5">
          <h3 className="font-normal ">Nome :</h3>
          <p>{players.name}</p>
        </li>
        <li className="mb-5">
          <h3 className="font-normal ">Cognome :</h3>
          <p>{players.surname}</p>
        </li>
        <li className="mb-5">
          <h3 className="font-normal ">Anno di nascita :</h3>
          <p>{players.yearOfBirth}</p>
        </li>
        <li className="mb-5">
          <h3 className="font-normal ">Nazionalità :</h3>
          <p>{players.nationality}</p>
        </li>
        <li className="mb-5">
          <h3 className="font-normal ">Ruolo :</h3>
          <p>{players.role} </p>
        </li>
        <li className="mb-5">
          <h3 className="font-normal ">Biografia :{' '} <br /></h3>
            <p><br />
              {players.palmares.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              )
              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
            </p>
       
        </li>
      </ul>
    </div>
  )
}

export default PlayerCard
