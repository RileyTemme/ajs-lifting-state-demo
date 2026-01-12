
import { useState } from 'react'

const NameInput = () => {
	const [name, setName] = useState('John Snow')

	return (
		<input 
			type="text"
			style={{ fontSize: '16px', padding: '8px', width: '300px', margin: '10px 10px 20px' }}
			value={name} 
			onChange={e => setName(e.target.value)}
		/>
	)
}

export default NameInput