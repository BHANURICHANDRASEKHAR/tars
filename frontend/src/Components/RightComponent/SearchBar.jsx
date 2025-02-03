import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/Context';
import { FaSearch, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import Input from '../Login/Input';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDesc, setIsDesc] = useState(false);
    const { Results, SetResults, user,filteredResults, setFilteredResults } = useContext(UserContext);
    useEffect(() => {
        const filtered = Results.filter(item =>
            item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredResults(filtered);
    }, [searchTerm, Results]);

    const handleSort = () => {
        setIsDesc(prev => !prev);
        setFilteredResults(prev => [...prev].sort((a, b) => 
            isDesc ? a.caption.localeCompare(b.caption) : b.caption.localeCompare(a.caption)
        ));
    };

    return (
        <div className='row'>
            <div className='col-2 d-flex justify-content-end mt-4'>
                <FaSearch size={25} />
            </div>
            <div className='col-8 col-sm'>
                <Input
                    placeholder='Enter search term'
                    name='text'
                    type='text'
                    handler={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
            </div>
            <div className='col-2 mt-3'>
                <button className='btn btn-secondary' onClick={handleSort}>
                    {isDesc ? <FaSortAlphaDown /> : <FaSortAlphaUp />} &ensp;Sort
                </button>
            </div>
        </div>
    );
}
