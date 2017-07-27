/**
 * @api{get}/api/v0.1.0 0.Welcome Todo api
 * @apiName GetTodo
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * 
 * @apiSuccess message "Hello! welcome to To Do api!".
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  message: "Hello! welcome to To Do api!"
 * }

*/


// view all items in the list
/**
 * @api{get}/api/v0.1.0/todotasks 1.View all items in the list
 * @apiName GetViewAllTask
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription view all to do task item in the list
 * 
 * @apiSuccess {String} id The to do item id.
 * @apiSuccess {String} name The to do item name.
 * @apiSuccess {String} description The to do item description.
 * @apiSuccess {Object} status The to do item status.
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "_id": "1",
 *  "name": "Travel",
 *  "description": "Travel at Doi Inthanon",
 *  "status": [
 *          "pending"
 *            ]
 * },
 * {
 *  "_id": "2",
 *  "name": "Watch football",
 *  "description": "I watching football match at home",
 *  "status": [
 *          "done"
 *            ]
 * }

*/

//add a task to the list
/**
 * @api{post}/api/v0.1.0/todotasks 3.add a task to the list
 * @apiName AddTaskToLIst
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription add a new task to the list
 * @apiParam {String} name task item name.
 * @apiParam {String} description task item description.
 * @apiParam {Object} status task item status.
 * 
 * @apiSuccess {String} id The to do item id.
 * @apiSuccess {String} name task item name.
 * @apiSuccess {String} description task item description.
 * @apiSuccess {Object} status task item status.
 * 
 * @apiSuccessExample Example data on success:
 * {
 *      "Add new Buy Coffee Completed"
 * }

*/

//delete all task in the list
/**
 * @api{post}/api/v0.1.0/todotasks 5.Delete all task to the list
 * @apiName DeleteAllTaskToLIst
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription delete all task to the list
 * 
 * @apiSuccessExample Example data on success:
 * {
 *       message:"All task deleted"
 * }

*/


// view a single task items in the list
/**
 * @api{get}/api/v0.1.0/todotasks/:task_id 2.View a single task in the list
 * @apiName GetViewSingleTask
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription view a single to do task item in the list
 * @apiParam {String} id task item unique ID.
 * 
 * @apiSuccess {String} id The to do item id.
 * @apiSuccess {String} name The to do item name.
 * @apiSuccess {String} description The to do item description.
 * @apiSuccess {Object} status The to do item status.
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "_id": "2",
 *  "name": "Watch football",
 *  "description": "I watching football match at home",
 *  "status": [
 *          "done"
 *            ]
 * }

*/

// edit existing task
/**
 * @api{put}/api/v0.1.0/todotasks/:task_id 4.Edit existing task
 * @apiName EditTask
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription edit existing task and set the task status
 * @apiParam {String} id task item unique ID.
 * @apiParam {String} name The to do item name.
 * @apiParam {String} description The to do item description.
 * @apiParam {Object} status The to do item status.
 * 
 * @apiSuccess {String} id The to do item id.
 * @apiSuccess {String} name The to do item name.
 * @apiSuccess {String} description The to do item description.
 * @apiSuccess {Object} status The to do item status.
 * 
 * @apiSuccessExample Example data on success:
 * {
 *      "Edit item Buy coffee Completed"
 * }

*/

//delete a task from the list
/**
 * @api{delete}/api/v0.1.0/todotasks/:task_id 6.Delete a task from the list
 * @apiName DeleteTask
 * @apiGroup Todo
 * @apiVersion 0.1.0 
 * @apiDescription delete a task from To Do list
 * @apiParam {String} id task item unique ID.
 * 
 * @apiSuccessExample Example data on success:
 * { 
 *      "Delete task Buy coffee Completed" 
 * }
*/