define({ "api": [
  {
    "type": "post",
    "url": "/api/v0.1.0/todotasks",
    "title": "3.add a task to the list",
    "name": "AddTaskToLIst",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>add a new task to the list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>task item name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>task item description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>task item status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The to do item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>task item name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>task item description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>task item status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n     \"Add new Buy Coffee Completed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "post",
    "url": "/api/v0.1.0/todotasks",
    "title": "5.Delete all task to the list",
    "name": "DeleteAllTaskToLIst",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>delete all task to the list</p>",
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n      message:\"All task deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "delete",
    "url": "/api/v0.1.0/todotasks/:task_id",
    "title": "6.Delete a task from the list",
    "name": "DeleteTask",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>delete a task from To Do list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>task item unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{ \n     \"Delete task Buy coffee Completed\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "put",
    "url": "/api/v0.1.0/todotasks/:task_id",
    "title": "4.Edit existing task",
    "name": "EditTask",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>edit existing task and set the task status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>task item unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The to do item name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The to do item description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>The to do item status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The to do item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The to do item name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The to do item description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>The to do item status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n     \"Edit item Buy coffee Completed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/api/v0.1.0",
    "title": "0.Welcome Todo api",
    "name": "GetTodo",
    "group": "Todo",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Hello! welcome to To Do api!&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n message: \"Hello! welcome to To Do api!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/api/v0.1.0/todotasks",
    "title": "1.View all items in the list",
    "name": "GetViewAllTask",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>view all to do task item in the list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The to do item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The to do item name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The to do item description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>The to do item status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n \"_id\": \"1\",\n \"name\": \"Travel\",\n \"description\": \"Travel at Doi Inthanon\",\n \"status\": [\n         \"pending\"\n           ]\n},\n{\n \"_id\": \"2\",\n \"name\": \"Watch football\",\n \"description\": \"I watching football match at home\",\n \"status\": [\n         \"done\"\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/api/v0.1.0/todotasks/:task_id",
    "title": "2.View a single task in the list",
    "name": "GetViewSingleTask",
    "group": "Todo",
    "version": "0.1.0",
    "description": "<p>view a single to do task item in the list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>task item unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The to do item id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The to do item name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The to do item description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>The to do item status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n \"_id\": \"2\",\n \"name\": \"Watch football\",\n \"description\": \"I watching football match at home\",\n \"status\": [\n         \"done\"\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidog.js",
    "groupTitle": "Todo"
  }
] });
