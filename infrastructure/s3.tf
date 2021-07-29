/* resource "aws_s3_account_public_access_block" "block_public_acess" {
  // S3 bucket-level Public Access Block configuration 
   block_public_acls       = true
   block_public_policy     = true
   ignore_public_acls      = true
   restrict_public_buckets = true
} */

/*resource "random_id" "bucket_id" {
  byte_length = 4
}

resource "aws_s3_bucket" "project_bucket" {
  bucket = "fair-air-${random_id.bucket_id.hex}"
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}
*/

resource "aws_s3_bucket" "create_bucket" {
  bucket        = "fairair-project.com"
  acl           = "public-read"
  force_destroy = true
  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "bucket" {
  bucket = aws_s3_bucket.create_bucket.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket_policy" "policy" {
  bucket = aws_s3_bucket.create_bucket.id
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "PublicReadGetObject",
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : [
          "s3:GetObject"
        ],
        "Resource" : [
          "arn:aws:s3:::${aws_s3_bucket.create_bucket.id}/*"
        ]
      }
    ]
  })
}

