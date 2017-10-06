const Koa = require('koa');
const koaBody = require('koa-body');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};
const getUserInfo = async function(ctx) {
  const body = ctx.request.body;
  if (!body.userId) ctx.throw(400, { status:1001,errormsg:'.name required' });
  if (body.userId==1001){
	   ctx.body = { status:1000,name:'kael',age:24 };
  }else if(body.userId==1002){
	  ctx.body = { status:1000, name:'qimeier' ,age:24 };
  }else{
	   ctx.body = { status:1002,errormsg:'unkonwn user'  };
  }
 
};

const home = ctx => {
  ctx.response.body = 'welcom';
};

app.use(koaBody());
app.use(route.get('/',main));
app.use(route.post('/getUserInfo', getUserInfo));
app.use(home);
app.listen(3000);
