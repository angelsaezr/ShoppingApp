<script lang="ts">
    export let data;
    
    // Get the total number of products
    let productCount = data.table1.length;

    // Delete an item from the table
    function deleteItem(id: number) {
        fetch("?/deleteTable", {
            method: "POST",
            body: new URLSearchParams({ id: id.toString() })
        }).then(() => location.reload());
    }
</script>



<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 800px;
    }

    .header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .header h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
    }

    .header img {
        width: 40px;
        height: 40px;
    }

    .product-count {
        font-size: 1.2rem;
        margin-bottom: 15px;
        color: #555;
    }

    .table-container {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
    }

    th, td {
        padding: 15px;
        border-bottom: 1px solid #eaeaea;
    }

    th {
        background-color: #f8f9fa;
        font-weight: bold;
        text-transform: uppercase;
    }

    tr:last-child td {
        border-bottom: none;
    }

    tr:hover {
        background-color: #f1f5f9;
    }

    .form-container {
        margin-top: 20px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        width: 100%;
    }

    .form-row {
        display: flex;
        gap: 15px;
        justify-content: space-between;
        align-items: center;
    }

    .form-row input[type="text"] {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .form-row input[type="checkbox"] {
        transform: scale(1.2);
    }

    button {
        padding: 10px 20px;
        background-color: #4659ff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #001aff;
    }
</style>

<div class="container">
    <!-- Header -->
    <div class="header">
        <img src="/icons/icon1.png" alt="Shopping Basket Icon" />
        <h1>Shopping List</h1>
    </div>

    <!-- Product Count -->
    <div class="product-count">
        Total Products: {productCount}
    </div>

    <!-- Table -->
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                {#each data.table1 as row (row.id)}
                    <tr>
                        <td>{row.Product}</td>
                        <td>{row.Quantity}</td>
                        <td>
                            <input type="checkbox" disabled checked={row.Done === "true"} />
                        </td>
                        <td>
                            <button on:click={() => deleteItem(row.id)}>❌</button>
                        </td>
                    </tr>
                {/each}
            </tbody>            
        </table>
    </div>

    <!-- Form -->
    <div class="form-container">
        <form method="POST" action="?/addTable">
            <div class="form-row">
                <input name="Product" type="text" placeholder="Product name" />
                <input name="Quantity" type="text" placeholder="Quantity" />
                <input name="Done" type="checkbox" />
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
</div>
