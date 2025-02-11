# Node.js Unhandled Error Example

This repository demonstrates a common error in Node.js applications:  lack of proper error handling in HTTP servers.  The `bug.js` file showcases a server without error handling, while `bugSolution.js` provides a corrected version with comprehensive error handling.

## Bug

The original server in `bug.js` lacks error handling mechanisms. This can lead to unexpected crashes and failures if something goes wrong on the server side (e.g., database connection issues, file system errors).  When an error occurs, the server may not shut down gracefully, leading to data loss or inconsistencies.

## Solution

The improved server in `bugSolution.js` includes robust error handling that gracefully handles various exceptions. This ensures that the server shuts down cleanly and logs errors to provide valuable debugging information.  The example demonstrates the use of `process.on('uncaughtException')` and similar error handling techniques to maintain the server's stability and resilience.