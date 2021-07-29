resource "aws_security_group" "allow_computer" {
  name = "allow_computer"
  # vpc_id      = aws_vpc.main.id
  vpc_id = "vpc-09d4d171"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["68.250.227.30/32"]
  }
  ingress {
    from_port = 80
    to_port   = 80
    protocol  = "http"
  }
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["68.250.227.30/32"]
  }

}
