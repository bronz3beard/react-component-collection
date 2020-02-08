```js
const columns =[
  {
      Header: 'Id',
      Value: 'id',
  }, {
      Header: 'Content',
      Value: 'body',
  }, {
      Header: 'Email',
      Value: 'email',
  }, {
      Header: 'Name',
      Value: 'name',
  },
];

const data = [
	{
		body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
		email: "Eliseo@gardner.biz",
		id: 1,
		name: "id labore ex et quam laborum",
		postId: 1,
	},
	{
		body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
		email: "Jayne_Kuhic@sydney.com",
		id: 2,
		name: "quo vero reiciendis velit similique earum",
		postId: 1,
	},
	{
		postId: 1,
		id: 3,
		name: "odio adipisci rerum aut animi",
		email: "Nikita@garfield.biz",
		body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
];

const App = () => {
const [data, setData] = useState([]);
const [hasLoader, setHasLoader] = useState(true);
  const loadRecordsFromServer = () => {
      const xmlhr = new XMLHttpRequest();
      const url = 'https://jsonplaceholder.typicode.com/comments';
      xmlhr.open('GET', url, true);
      xmlhr.onload = () => {
          if (xmlhr.readyState === xmlhr.DONE) {
              if (xmlhr.status === 200) {
                  const data = JSON.parse(xmlhr.responseText);
                  setData(data);
                  setHasLoader(false);
              }
          }
      };
      xmlhr.send();
  };

  useEffect(() => {
    loadRecordsFromServer();
  }, [])

  return (
    <DataTable data={data} columns={columns} hasLoader={hasLoader} totalRecordsPerPage={30} />
  );
}
```

WIP:

Above is just one example of how to use the Data table, the table has a on page (client side) filter and columns can be sorted by `asc` or `desc`

In the columns array the `Value` attribute must match an item you wish to display from your `data`.
