function insert_Row() {
	const table = document.getElementById("sampleTable");
    const row = document.createElement("tr")
    row.innerHTML=`<td>New Cell1</td>
                    <td>New Cell2</td>`
    table.prepend(row);
}
