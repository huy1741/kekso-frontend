import React from 'react'
import { ImSearch } from 'react-icons/im';
interface Props {
    checkedBox: boolean;
    onBoxClicked(): void;
    handleTextChange(text: string): void;

}
export const SearchBar: React.FC<Props> = ({ checkedBox, onBoxClicked, handleTextChange }) => {
    return <div className='searchBar'>
        <p> Filter orders by product name </p>
        <div className='searchInput'>
            <input type="text" placeholder="Aniseed Syrup" onChange={e => handleTextChange(e.target.value)} />
            <ImSearch id="searchIcon" />
        </div>
        <label className="showShipped">
            Show only shipped orders
            <input type="checkbox" defaultChecked={checkedBox} onClick={onBoxClicked} />
            <span className="checkmark"></span>
        </label>
    </div>
}