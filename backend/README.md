npx prisma generate
npx prisma migrate dev --name init 
npx prisma migrate deploy

ignore model folder 

schema designed , but changes needed

connect to database remaining

pacakages used : 

prisma orm schema ready 
pg admin tables created

database connected success 


invite controller : removed organization id forgin key and tested , and email sent success and email stored in database, now again foreign key referenced , but organization id now to reference in invite.js

invite_routes : made for testing purposes , testing done for invite , so ignore that


organization_controller : create organization and getall organization done , but referencing admin login , and super admin login pending 

organization_routes : pending 

referencing organization id in invite pending 


user_group controller : create user group and get all user groups done , referencing organization pending 

user groups routes remaining

otp schema and role schema added 

auth secret key generated 

referenced organization id in invite

email otp verification completed 

utils generate token done 

auth middleware setup done

signup and sign in done 

final schema ready

email otp ready 

forgot password done
