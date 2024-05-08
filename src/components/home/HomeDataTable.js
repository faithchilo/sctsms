import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component'
import {data} from '../../models/Data';

function HomeDataTable() 
{
    const [search, SetSearch] = useState('');
    const [filter,SetFilter] = useState([]);

    useEffect(()=>{
        SetFilter(data);
    },[]);

    useEffect(() => {
        const result = data.filter((item) => {
            return item.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        SetFilter(result);
    },[search]);

    const handleDeleteRow = (val) => {
        const newdata = data.filter((item)=>item.id !== val);
        SetFilter(newdata);
    }

    const tableHeaderStyle = {
        headCells: {
            style:{
                fontWeight: "bold",
                fontSize: "14px",
                backgroundColor: "#e9f9eb",
            }
        }
    }

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        {
            name: "Title",
            selector: row => row.title,
            sortable: true,
            
        },
        {
            name: "Required Action",
            selector: row => row.action,
            sortable: true,
        },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true,
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <button className="bg-red-600 text-white rounded-sm p-2 hover:bg-red-800" onClick={() => handleDeleteRow(row.id)}>Delete</button>
            ),
        }        
    ];

  return ( 
    <div class="flex text-red-400 flex-col col-span-4 h-auto max-w-full items-center justify-center rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg">
        <DataTable
            columns={columns}
            data={filter}
            fixedHeader
            pagination
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            customStyles={tableHeaderStyle}
            actions = {
                <button className='rounded-sm text-sm bg-primary text-white active:bg-secondary-100 hover:bg-secondary-100 p-2'> Export PDF</button>
            }
            subHeader
            subHeaderAlign='right'
            subHeaderComponent = {
                <input 
                type="text"
                className='form-control rounded-md border-2 py-1 pl-1 border-black text-black'
                placeholder='Search...'
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
                />
            }
            >
        </DataTable>
    </div>
  )
}

export default HomeDataTable