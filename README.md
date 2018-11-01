# Basic idea
Two stacks. One to provie the macro, one to use it.
Support code for Sildeshare: https://de.slideshare.net/MaikNowak/aws-cloudformation-macros-121473952

# get started

Transpile debug.ts to Javascript

update macro.stack.yaml to point to dist folder

Run the following commands to deploy the provide-macro-stack (alter to your needs)
```
aws cloudformation package --template-file TEMPLATEFILE  --output-template-file TEMPLATEFILE.out  --s3-bucket S3BUCKETNAME
aws cloudformation deploy --template-file TEMPLATEFILE.out --stack-name STACKNAME 
```

Now deploy the use-macro-stack and check CloudWatch logs.
```
aws cloudformation deploy --template-file TEMPLATEFILE.out --stack-name STACKNAME 
```