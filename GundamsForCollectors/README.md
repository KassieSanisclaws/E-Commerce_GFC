Tools: - NodeJS
       - MongoDB/ MongoDB-Compass
       - React
       - Html
       - Babel
       - Web Browser
       - Postman
       - Redux (Manage frontend store/ product state)
       - axios library
       - express
       - nodemon
       - ES7 react-snippet
       - prettier  
       - dotenv
       - jsonwebtoken
       - bcrypt
       - 

Project Implementation Plan:
---------------------------------------------------------------------------------------------------

stage1: - Website Template.
        - Create GundamsForCollectors Folder
        - create template/ template folder.
        - create index.html.
        - create styles.css.
        - create images folder and load images of products.
        - download Node js and confirm installation. 
        - set-up project folder for saving completion. 
        - add default HTML code.
        - link to styles.css.
        - create header, main and footer. 
        - style elements.
        - created another link for the stars rating addes to the header section from  font aweseome. *(it is a library to show image shapes)*
        - ** checked the results working **

stage2: - Display Products.
        - create products div.
        - add product attributes.
        - add link, images, name and price. 
        - add star ratings. 
        - add static price on product card. 
        - ** checked the results working ** 

stage3: - create react application 
        - give the reacty app folder a name (.example below)
        - npx create-react-app frontend
        - npm start *(to start and run the react application on the server localhost:3000)*.
        - copy index.html design layout from template folder and move it to the frontend react application in the src folder in the App.js removing/ replacing the content with the index.html design template.
        - copy style.css design from template folder and move it to the frontend react application in the src folder in the index.css removing/ replacing context with style.css design template.
        - remove unused files (App.css, App.test.js, logo.svg, setupTests.js).
        - replace class with className in the react frontend application in App.js so react can read/ interpret.
        - replace onclick with "onClick". 
        - ** checked the results working ** 

stage4: - change the hard coded data to a static array of the products using javascript. 
        - create data.js in src folder and create static javascript array of the products.
        - add images sources. 
        - create a new file named data.js which will hold all the data of the products.
        - add "Images" folder to public folder including images.
        - implement side hamburger menu. 
        - convert your javascript array into html-6 by using "{ }" *(curly braces)*.
        - update the static text array to a dynamic array holding the products various information.
        - set a key when using the data map function for your dynamic data. 
        - create a rating component. 
        - in the public folder in the index.html right before "-title- React App -title- paste link for font awesome to display the star ratings component on thge prodcuts. 

stage5: - create rating and product componenets.
        - create components/Rating.js.
        - create div.rating.
        - style div.rating, span and last span.
        - created product component.
        - use rating component.
        - create a product object as a product in the App.js.
        - crated rating component.
        - ** checked results application fucntioning all good till this point **

stage6: - install react-router-dom. *(we can define multiple router routes)*
        - use BrowserRouter and route to home/ index screen.
        - create react-router-dom to route through screens.
        - create ProductScreen.js.
        - create HomeScreen.js.
        - add product list code there. 
        - add new rouite from product details to App.js.
        - create 3 columns fopr product image, info and action in ProductScreen. 
        - Define routes.
        - routes are in App.js and placed in the "main" section part. 
        - create Link in product screen for "Back To Results" before the *("-div cLaSsName="top row"- and close Link)*.
        - create li, ul, div and class to push content to the top of the products screen. also set in the index.css the formatting design.
        - ** checked and working/ fucntioning up till this point **

stage7: - styling the products screen when item selected. 
        - index.css adding style to ProductScreen. 
        - *(2) minor glitches in the index.css = product scrfeen add to cart button not full width, = the padding shrinks a little when cusor pointer hover over add to cart button*.
        - added data.js and added data of products.
        - updated data.js added countInStock and on the ProductScreen reads the count and display message status. 
        - in App.js imported Router and BrowserRouter to route through screens through path and products. 
        - in package.json (working tree) installed new package react-router-dom, manages the routes through the frontend of the react application. 
        - added style in the index.css for the li list, ul list, col-1 and col-2, row.top and button. 
        - 

stage8: - create Node.js server.
        - run npm init in GundamsForCollectors folder to get the packag.json.
        - update the package.json set type: module.
        - Add .js to imports.
        - npm install express in the GundamsForCollectors folder. 
        - create backend folder in GundamsForCollectors. 
        - create server.js in the backend folder and move products.js contents to it.
        - add start command as node backend/server.js.
        - require express.
        - create route for / return backend is ready.
        - move products.js from frontend to backend.
        - create route for /api/products.
        - return products.
        - run npm start. 
        - npm install --save-dev nodemon in the GundamsForCollectors folder. ** (this helps rerun server when changes are made instead of stopping and restarting the server) **
        -  server.js we served server.
        - in package.json we added change to restart server when changes are made and to watch the backend folder. 

stage9: - Load products fron backend.
        - edit HomeScreen.js.
        - define products, loading and error.
        - create useEffect.
        - define async fetchData and call it.
        - install axios.
        - get data from /api/products.
        - show them in the list.
        - create Loading Component.
        - create Message Box Component.
        - use them in HomeScreen.
        - ** (cheked application functioning/ working up till this point) **
        - ** (1 glitch is in the produc t screen when hover over the add to cart button) **

stage10: Add Redux to HomeScreen.
        - npm install redux react-redux.
        - create store.js.
        - initState= {products:[]}
        - reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
        - export default create Store (reducer, initState).
        - edit HomeScreen.js.
        - shopeName = usesSelector(state=>state.products).
        - const dispatch = useDispatch()
        - useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data}).
        - Add store to index.js.
        - using redux to get the products from backend and put them in redux state instead of the component state.
        - dispatching an action in the view part (frontend) and send a requesty to the redux store and make a change in the state of the application.
        - create an action and dispatch the action to the redux store state. 
        - reducer is function that gets the current state. 
        - created basic redux store.
        - install redux-thunk (makes it possible to send ajask requests in our redux actions).
        - add redux thunk to your store and update store. 
        - create a constant for action that dspatch from frontend request to the backend modifying the HomeScreen.js.
        - added redux to react project.
        - index.js wrapped whole project inside provider from react redux to get access to redux store for react components.
        - created redux store and introduced reducer initialstate and thunk middlewarfe. 
        - in productActions.js we deifned action to get list of products from backend.
        - in productReducer.js we update store based on product actions.
        - homescreen removed all code to fetch data from  backend and dispatch redux action to and that action updated the redux store and read the redux store and reflect it in the view.

stage11: - add product screen to redux
         - create 2 actions "PRODUCT_DETAILS_REQUEST" to fetch data from backend for a specific product and "PRODUCT_DETAILS_SUCCESS" to return the products data from backend and put them in the redux store. 
         - in server.js create a api for products details.
         - create product details constants, actions and reducers.
         - add reducer to store.js.
         - use action in preoductScreen.js.
         - add /api/product/:id to backend api.
         - in server.js added new api for product details.
         - in store.js added product details reducer to list of reducers in redux store.
         - in product action defined new action to return product details data from backend.
         - in product screen used the new action in useEffect and show that data on the screen. 

stage12: - Handle Add To Cart Button.
         - implement add to cart button in ProductScreen.js.
         - implement qty amount on ProductScreen.js on products.
         - implement cartScreen.js.
         - in ProductScreen.js implemented an empty container and moved the <li> with the primary block add to cart button into the container because do not want to show the button for a product that does not have countInStock.
         - in the CartScreen.js the props.location.search line gets the qty after the "?" on the ProductScreen.js when product is selected and reads data from the backend which then displays the countInStock and if no countInStock no button or qty box is displayed just show unavailable status.
         - created a hook in ProductScreen.js to get qty of product to add to the user cart.
         - created a function handler(addToCartHandler) to handle add to cart button with the product id and the quantity of that product.
         - created a select box in ProductScreen.js and only works by reading data in backend and display amount. if there is no countInStcok an unavailable status will display.
         - added style in index.css for select box and qty.
         - added CartScreen.js to routes in HomeScreen.js.

stage13: - Implement Add to cart Action.
         - create addToCart constants, action and reducers.
         - add reducer to store.js.
         - use action in CartScreen.js.
         - render cartitems.length.
         - dispatch and getState are actions in redux-thunk that dispatch an action and get access to state of redux store.
         - send a ajack request to server. 
         - (3:28)video-time-lapse redux store state may need modifications to cart actions, cartReducer, cartConstants and CartScreen. 

stage14: - Connect to MongoDB.
         - npm install mongoose.
         - create config.js.
         - npm install dotenv.
         - export MONGODB_URL.
         - create models/userModel.js.
         - create userSchema and userModel.
         - create models/productModels.js.
         - create productSchema and productModel.
         - create userRoute.
         - seed sample data.
         -

stage15: - created userModel.js.
         - created userRouter.js.
         - created an api/seed for user authentication in the backend.
         - installed mongoose in the main project folder for mongoDB database use.
         - installed bcryptjs in the main project folder for password encrpytion.
         - created mongoose user schema for name, password, email and if the user isAdmin.
         - created router folder in backend and created userRouters.js.
         - created model folder in backend.
         - added userModel.js for the mongoose sample user records.
         - in data.js added user fields.(name, password, email and isAdmin).
         - 

stage16: - Create sample products in MongoDB.
         - create models/productModel.js.
         - create productSchema and productModel.
         - create productRoute.
         - seed sample Data.
         - updated data.js and removed id from products.
         - imported product router and defined 3 apis based on products. '/seed' to create 8 products based on data.products, for sending list of products to front end, and sending detaisl of the product to the frontend.
         - 

stage17: - Create Sign-in Backend.
         - create signin api.
         - check emailand password.
         - generate token.
         - install json web token.
         - install dotenv.
         - return token and data.
         - test it using postman.
         - ** (application working and data for users, products is coming from Mongodb) **

stage18: - Design SigninScreen.
         - create SigninScreen.
         - render emailand password fields.
         - created signin constants, action and reducers.
         - updated header based on user login.
         - 


stage19: - Implement SignIn Action.
         - create signin constants, actions and reducers.
         - add reducer to store.js.
         - use action in SigninScreen.js.
         - in App.js showed locked in user in header of signin link when signin authenticatioin is true.
         - in store.js added user signin reducer to redux store.
         - in useraction used 2 actions for sign in and sign out
         - implemented actions for sighnin and signout.
         - in user constant made constants for user signin and user signout.
         - updated SigninScreen to show error message, loading box, and make the signin fucntioning. 
         - in userReducers updated the status in the redux store for signin and signout. 


stage20: - Create RegisterScreen and Backend API
         - create API for /api/users/register to register the user or new user.
         - insert new user to database.
         - return user info and token.
         - create RegisterScreen 
         - Add fields.
         - Style fields.
         - Add screen to App.js
         - index.css created loading class and alert class. 
         - created a new userAction to register a user.
         - in registerscreen created new user to check user and validate user based on credentials.

stage21: - Create Shipping Screen.
         - create CheckoutSteps.js component.
         - create shipping fields.
         - implement shipping constant, actions and reducers.
         - implemented ShippingAddressScreen in trhe App.js
         - added styles to checkoutsteps for checkout wizard.
         - created checkoutstesp component to show the checkout steps for user.
         - in cart actions defined new action to save shipping address.
         - created shippingAddressScreen to get all information from user (fullName, address, country, postalCode, city).
         - in the cart reducers update the redux store based on saveShippingAddress action.
         - ** application working in order up to this point **

stage22: - Create Payment Screen.
         - create payment fields.
         - implement shipping constant, actions and reducers.
         - in App.js added PaymentMethodScreen.js to get payment methods from users.
         - in store.js set the payment  method to default which is paypal.
         - in cartActions added new action to save payment method.
         - cartReducers updated the cart object by new payment method.
         - in userActions removed shippingAddress when user clicks on signout.
         - created PaymentMethodScreen to get payment from user.
         - 

stage23: - Design Place Order Screen.
         - design order summary fields.
         - design order action.
         - 

stage24: - Create Place Order API.
         - createOrder api.
         - create orderModel.
         - create orderRouter.
         - create post order route.
         - added middleware to utils.js.
         - created model in orderModel to save shipping information and order models.
         - created api in orderRouter at the given address.

stage25: - Implement PlaceOrder Action.
         - handle place order button click.
         - create place order constants, action and reducer.
         - imported ORDER_CREATE_ reducer in store.js
         - created a new action to create order in backend.
         - in cartConstants.js made new action that makes cart empty after placing order.
         - orderConstants.js difined the constant.
         - cartConstant defined a new action to make cart empty after placing order.
         ordereducer created a new reeducer to update the redux store status.

stage26: - Create Order Screen.
         - build order api for /api/orders/:id.
         - create OrderScreen.js.
         - dispatch order details action in useEffect.
         - load data with useSelector.
         - show data like place order screen.
         - create order details constant, action and reducer.
         - in orderRouter defined detailsorder api.
         - in order action created new action to get order details from backend.
         - in app.js added OrderScreen as new route.
         - in store.js added order details reducer.
         - created Orderscreen to show the details. 

7:26:55(video-time-lapse)
stage:27 - Add PayPal Button.
         - get client id from paypal.
         - set it in .env file.
         - create route form /api/paypal/clientId.
         - create getPaypalClientID in api.js
         - add paypal checkout script in OrderScreen.js
         - show paypal button
         - ** application working, paypal button not working/ implemented **.
         - 

stage:28 - Dispaly Order History.
         - create customer orders api.
         - create api for getMyOrders.
         - show orders in ProfileScreen.js.
         - style orders.
         - in App.js added new screen for order history 
         - in store.js added new reducer for returning list of orders.
         - created a new route to return orders of current user.
         - in index.css created style for table.
         - orderActions added new action to return list of orders for current user.
         - orderConstant and reducer implemented that action.
         - OrderHistoryScreen top show list of orders for current user.

stage:29 - created new route in backend to return user information by id.
         - in store.js added new reducer in store.js for user details.
         - in userDetails managed the state change in redux.
         - app.js added new screen/profile.
         - userAction added new action to send request to backend to get user information.
         - in profileScreen.js created a new screen to show a form for showing user information update.
         - userReducer managed state change in redux for user details.
         - ** Application working except for paypal button and implementation.**

stage:30 - Display User Profile.
         - create user details api.
         - show user information.
         - created new route in the backend for the user information by its id.
         - in store.js added a new reducer for user details.
         - userReducer manage state change in redux for details.
         - in app.js added new screen/profile.
         - in userAction added new action to send ajax request to get user details information.
         - in profile screen created a form to show the user data.
         - ** Application working except for paypal button and implementation **

stage:31 - Update User Profile.
         - create user update api.
         - update user info.
         - in userRouter created new api to update profile.
         - App.js we used private route to define profile screen as a private route.
         - in userActions created a new action to update user profile.
         - in store.js added new reducer for update profile.
         - defined a new component that is a wrapper on route from react-router-dom and only render a component if user is signed in.
         - in profile screen get user name, email and password from user and pass it to update profile action to update the user profile. 
         - ** application working with components except for the paypal button and implementation. **

stage:32 - Create Admin View.
         - create Admin Menu.
         - create Admin Middleware in backend.
         - create Admin route in frontend.
         - in App.js added a new menu nfor admin and only show dashboard if user is admin.
         - in adminRoute created a new route for admins.
         - in utils.js in backend added middleware to only authenticate admin users.
         - ** application working and functioning accept for paypal button and implementation. **

         : CREATE ADMIN LIST/CREATE/DELETE/UPLOAD/UPDATE PRODUCTS:
--------------------------------------------------------------------------------------------
stage:33                LIST PRODUCTS: (IMPLEMENT) - {IMPLEMENTED}
         - Create Product List Screen.
         - Add reducer to store.
         - show products on the screen.
         - created product list screen and have used the actions and reducers to show products in the list screen.
         - in the app.js added new protected route to take admin and show list of products.
         - ** Application Functioning exception for paypal button and implementation. **

stage:34                CREATE PRODUCT (IMPLEMENT) - {IMPLEMENTED}
         - build create product api.
         - build create product button.
         - define product create constant, action and reducer.
         - use action in product List Screen.
         - in product router created new route to create product api.
         - in app.js updated a route for product details and set exact to only the type of url.
         - in store.js added new action for product.
         - in produictListScreen added a new button to create product and redirect to product screen.
         - ** Application Functioning exception for paypal button and implementation. **

stage:35                BUILD PRODUCT EDIT SCREEN (IMPLEMENT) - {IMPLEMENTED}
         - create edit screen.
         - define state.
         - create fields.
         - load product details.
         - add to routes.
         - created new screen ProductEditScreen.js to show the information about the product and possible to change the value of the product in each field.
         - in productReducer.js removed product empty object *(product: {},)*.
         - in App.js added ProductEditScreen.js as a route.
         - in productRouter information fields for new input of products.
         - ** Application Functioning exception for paypal button and implementation. **

stage:36                UPDATE PRODUCT (IMPLEMENT) - {IMPLEMENTED}
         - define update api.
         - define product update constant, action and reducer.
         - use action in the ProductEditScreen.js.
         - in productRouter.js created a route to update product information.
         - in productActions.js in frontend seding a api request to update product
         - in store.js added a new reducer to update products.
         - in ProducteditScreen handled state for updating product in redux store.
         - ** Application Functioning exception for paypal button and implementation. **

stage:37              UPLOAD PRODUCT IMAGE (IMPLEMENT) - {IMPLEMENTED}    
         - npm install multer.
         - define upload router.
         - create uploads folder.
         - handle frontend.
         - installed react-paypal-button in GundamsForCollectors main folder.
         - installed multer for image uploads.
         - created uploadRouter.js in backend folder under Routers for managing image uploiads.
         - in package.json added a new dependentcy multer(for images).
         - in server.js defined a new router to upload file ands serve/uploads from uploads folder.
         - created uploads folder and put an empty file for git repository. 
         - ProductEditScreeen used Axios to serve product uploaded to the server.
         - in uploadrouter.js handled file that need to be uploaded in uploads folder.
         - ** Application Functioning exception for paypal button and implementation. **

stage:38             DELETE PRODUCT (IMPLEMENT) - {IMPLEMENTED}   
         - create delete api in backend.
         - create delete constants, action and reducer.
         - use it in product list screen.
         - in productRouter.js created a new router to delete products.   
         - store.js added productDeleteReducer. 
         - in productActions.js created a new action for deleting products.
         - in ProductListScreen implemented deleting a product. 
         - ** Application Functioning exception for paypal button and implementation. ** 
** Bugg on create new user and signin when redirect to shipping STILL SHOWS PREVIOUS SHIPPING DATA RECTIFY **      
