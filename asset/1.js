let record = [];
    const viewUser = () => {
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        let tbl = "";
        all.map((user) => {
            return (
                tbl += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.phone}</td>
                            <td>
                                <button onclick="deleteUser(${user.id})" class = "border-1">Delete</button>
                                <button onclick="editUser(${user.id})" class = "border-1">Edit</button>
                            </td>

                        </tr>
                    `
            )
        })
        document.getElementById('record').innerHTML = tbl;
    }
    viewUser();


    const saveUser = () => {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let id = document.getElementById('editid').value;
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name, phone
        }

        if (id) {
            let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];

            all.map((item) => {
                if (item.id == id) {
                    item.name = name,
                        item.phone = phone
                }
            })
            localStorage.setItem("user", JSON.stringify(all));
            alert("Record successfully update")
            document.getElementById('editid').value = ""
        } else {
            if (localStorage.getItem('user') === null || localStorage.getItem("user") === undefined) {
                record.push(obj)
                localStorage.setItem('user', JSON.stringify(record))
            } else {
                let old = JSON.parse(localStorage.getItem("user"));
                old.push(obj);
                localStorage.setItem("user", JSON.stringify(old))
            }
            alert("User register")
        }
        document.getElementById('name').value = ""
        document.getElementById('phone').value = ""
        viewUser();
    }


    const deleteUser = (id) => {
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];

        let deleteData = all.filter((item) => {
            return item.id != id;
        })
        localStorage.setItem("user", JSON.stringify(deleteData));
        alert("User delete");
        viewUser();
    }


    const editUser = (id) => {
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        let single = all.find(item => item.id == id);
        document.getElementById('name').value = single.name
        document.getElementById('phone').value = single.phone
        document.getElementById('editid').value = single.id
    }
