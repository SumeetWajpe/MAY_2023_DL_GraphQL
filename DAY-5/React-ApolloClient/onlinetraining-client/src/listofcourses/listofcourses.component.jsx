import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_COURSES } from "../graphql/querries";
import Course from "../course/course.component";

export default function Listofcourses() {
  // query -> useQuery(ourgraphqlquery) -> {error,loading,data}
  // state -> initial state value, method to update the state

  const PAGE_SIZE = 4;

  const [page, setPage] = useState(0);

  let { error, loading, data } = useQuery(GET_ALL_COURSES, {
    fetchPolicy: "network-only", // defaults to cache-first
    variables: {
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * page,
    },
  });
  let [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading) setCourses(data.courses);
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <header>
        <h1>List of Courses</h1>
      </header>

      <div className="row">
        {courses.map(course => (
          <Course course={course} key={course.id}></Course>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        {" "}
        <button
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page == 0}
        >
          Prev
        </button>
        <div> Page - {page + 1}</div>
        <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

// Supported fetch policies
// NAME	DESCRIPTION
// cache-first
// Apollo Client first executes the query against the cache. If all requested data is present in the cache, that data is returned. Otherwise, Apollo Client executes the query against your GraphQL server and returns that data after caching it.

// Prioritizes minimizing the number of network requests sent by your application.

// This is the default fetch policy.

// cache-only
// Apollo Client executes the query only against the cache. It never queries your server in this case.

// A cache-only query throws an error if the cache does not contain data for all requested fields.

// cache-and-network
// Apollo Client executes the full query against both the cache and your GraphQL server. The query automatically updates if the result of the server-side query modifies cached fields.

// Provides a fast response while also helping to keep cached data consistent with server data.
