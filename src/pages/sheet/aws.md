---
layout: ../../layouts/CheatSheet.astro
title: "AWS Cheatsheet"
---

The AWS Console is a web interface that you log into to manage your AWS services. In contrast to the AWS Console is AWS CLI. It is a great tool to manage AWS resources across different accounts, regions, and environments from the command line. It allows you to control services manually or create automation with scripts.

#### Config:

 - Create profile:
	```
	aws configure --profile (profilename)
	```
- Specify AWS Region
	```
	aws configure region (region-name)
	```
	
#### S3 Bucket creation:

 - in default AWS Region:
	```
	aws s3 mb s3://(bucket-name)
	```
- in specific AWS Region
	```
	aws s3 mb s3://mybucket --region (region-name)
	```
	
#### S3 List commands:

 - list all buckets in a given AWS account (based on permissions):
	```
	aws s3 ls
	```
- list the content of a bucket
	```
	aws s3 ls s3://(bucket-name)
	```

#### S3 Delete commands:

- file delete from a bucket
	```
	aws s3 rm s3://(bucket-name)/(filename)
	```
- delete all files from a bucket
	```
	aws s3 rm s3://(bucket-name) --recursive
	```
- delete an empty bucket
	```
	aws s3 rb s3://(bucket-name)
	```
- delete a bucket with items
	```
	aws s3 rb s3://(bucket-name) --force
	```
