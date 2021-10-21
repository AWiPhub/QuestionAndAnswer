# API сервиса по вопросам и ответам

## Users (Взаимодействие с пользователями)

---

<details>
<summary> 
GET /api/users Возвращает список пользователей</span>
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
POST /api/users Добавление пользователя
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
      Логин пользователя
    </td>
  </tr>
  <tr>
    <td valign="top">
      password* <br>
      string <br>
    </td>
    <td>
      Пароль пользователя
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
