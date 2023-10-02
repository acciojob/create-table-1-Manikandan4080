function insert_Row() {
	const table = document.getElementById("sampleTable");
    const firstChild = table.firstChild;
    const row = document.createElement("tr")
    row.innerHTML=`<td>New Cell1</td>
                    <td>New Cell2</td>`
    table.insertBefore(row, firstChild)
}
