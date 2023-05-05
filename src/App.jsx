import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
  }, []);

  
  const cl = (x) => {
    return console.log(x);
  };
  cl(users)

  const [pageNum, setPageNum] = useState(0);
  const usersPerPage = 1;
  const visitedPages = pageNum * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <>
      <ul>
        {users
          .slice(visitedPages, visitedPages + usersPerPage)
          .map((user, index) => (
            <li key={index}>
              {user.name}
            </li>
          ))}
      </ul>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBtns"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </>
  );
}

export default App;
