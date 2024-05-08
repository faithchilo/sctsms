const columns = [
        // {
        //     name: "ID",
        //     selector: row => row.id
        // },
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
                <button className="bg-red-600 text-white rounded-sm p-2 hover:bg-red-800">Delete</button>
            ),
        }        
    ];
    const data  = [
        {
            id: 1,
            title: "Grocery",
            action: "No action needed",
            price: "$20",
            date: "2024-01-01",          
        },
        {
            id: 2,
            title: "Home equipment",
            action: "No action needed",
            price: "$200",
            date: "2024-02-03"
        },
        {
            id: 3,
            title: "Laptop",
            action: "No action needed",
            price: "$1000",
            date: "2024-01-11"
        }, 
        {
            id: 5,
            title: "TV",
            action: "No action needed",
            price: "$400",
            date: "2024-07-05"
        },
        {
            id: 6,
            title: "Sound system",
            action: "No action needed",
            price: "$100",
            date: "2024-10-01"
        },
        {
            id: 7,
            title: "Car",
            action: "No action needed",
            price: "$10000",
            date: "2024-12-12"
        },
        {
            id: 8,
            title: "Phone",
            action: "No action needed",
            price: "$1000",
            date: "2024-12-25"
        },
        {
            id: 9,
            title: "Books",
            action: "Pick them up at kkoo",
            price: "$10",
            date: "2024-12-25"
        },
        {
            id: 10,
            title: "Water jugs",
            action: "Pay extra fee for shipping",
            price: "$10",
            date: "2024-12-25"
        },
        {
            id: 11,
            title: "Water filter",
            action: "No action needed",
            price: "$20",
            date: "2024-12-25"
        },
        {
            id: 12,
            title: "Juice carton",
            action: "No action needed",
            price: "$7",
            date: "2024-12-25"
        },
    ];

export { columns, data };