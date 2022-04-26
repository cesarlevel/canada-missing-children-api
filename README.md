# canada-missing-children-api
Canada missing children API.
[https://canada-missing-children-api.herokuapp.com/](https://canada-missing-children-api.herokuapp.com/)

For more information.

- [https://www.mcsc.ca/](https://www.mcsc.ca/)
- [https://missingkids.ca/en/missing-children-database/](https://missingkids.ca/en/missing-children-database/)
- [https://www.missingchildrensnetwork.ngo/missing-children-cases/in-canada/](https://www.missingchildrensnetwork.ngo/missing-children-cases/in-canada/)

## Endpoints

### GET `/missing`
Displays a list of all records.

#### QUERY PARAMETERS
Use them at the end of the request `URL` multiple queries can be added by using ampersands to separate them e.g. `https://canada-missing-children-api.herokuapp.com/missing?name={NAME}&province={PROVINCE_NAME}`.

Is possible to query multiple values by separating them with a comma `,` e.g. `https://canada-missing-children-api.herokuapp.com/missing?name={NAME},{NAME2},{NAME3}`

| Query Param | Description |
|-----|-----|
| `name` | Records by name |
| `age` | Records by age |
| `gender` | Records by gender |
| `location` | Records by location |
| `province` | Records by province |

---

## TODOs

- Make `missingSince` field a string <date-time>
- Explore the use of filters instead of query params
- Add status errors
