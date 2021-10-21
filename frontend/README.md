# API сервиса по вопросам и ответам

## Users (Взаимодействие с пользователями)

---

<details>
<summary> 
<button class="method GET">GET</button>
<span class="path">/api/users</span>
<span class="desc">Возвращает список пользователей</span>
</summary>

---

### Parameters

_No parameters_

---

### Responses

<table>
  <tr>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td valign="top">200</td>
    <td>
      <pre>
[
  {
    "id": 1,
    "username": "name",
    "password": "pass"
  }
]
      </pre>
    </td>
  </tr>
</table>

---

</details>

<details>
<summary> 
<button class="method POST">POST</button>
<span class="path">/api/users</span>
<span class="desc">Добавление пользователя</span>
</summary>

---

### Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td valign="top">
      username* <br>
      string <br>
    </td>
    <td>
      Логин пользователя <br>
      <input placeholder="username" />
    </td>
  </tr>
  <tr>
    <td valign="top">
      password* <br>
      string <br>
    </td>
    <td>
      Пароль пользователя <br>
      <input placeholder="password" type="password" />
    </td>
  </tr>
</table>

---

### Responses

<table>
  <tr>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td valign="top">200</td>
    <td>
      <pre>
{
  "id": 1,
  "username": "name",
  "password": "pass"
}
      </pre>
    </td>
  </tr>
</table>

---

</details>

<style type="text/css" rel="stylesheet">
details{
  margin-top: 5px;
}
summary::marker,
summary::-webkit-details-marker {
  
}
.GET{
  background-color: #1391FF;
}
.POST{
  background-color: #009D77;
}
.PUT{
  background-color: #E97500;
}
.DELETE{
  background-color: #CF3030;
}
.method{
  border-radius: 3px;
  color:#fff;
  width:80px;
  padding: 6px 0;
  font-weight: 700
}
.path{
  color: #3b4151;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
  user-select: none;
}
.desc{
  color: #3b4151;
  font-size: 13px;
  font-weight: 600;
  user-select: none;
}
</style>
