resource "aws_key_pair" "jenkins_automation" {
  key_name   = "jenkins-automation"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCrpiC5fgrR2Tz/h6xjqEjxU8xIAO6REz4qCNdZdERwnNvnJMWxLlsXf6VwwkjVgezi7C4c4wKLukLgqgGSpltuzMQ+8Tl/KsYTvO4GyYFis2sgz/qnD7e7q7AHotQOjMI45tJmtcp9cpPT0YU8Y1BeXXM0SM/N8Lgu5TFdfqsyPCCUSUmlD1enzT+SRcN+KexWtXt1V3Of6d3U4xEfqoPEm7FlBArwTwr8tgBiblMMMeR6KLYS3N8ZjRSZZ8ETjyzoC+g/UW9A3zOH+6umRHKjHCKBK8jGN+OSAGOH+9SeN+OcRbbdMn9Zrbya9wtVA9ftybdlgqy0tfHVquKdWya5ENdqMrYlnwICASIWPtdo+hq05N/2PIc1d/E02XgbHH6DbgkVFKHsJxi7XCOOjRKNFdVa7WA/RCZAdMutfco1gJibJGUVkGHKpgdUpyUT/fK8bZXcbx9rJYGqdVISPEewoyO2HQfdc6wwH25nCvzMQ3o7NlmgH0VS94pjlrQVpPWB3q1QmeO3QxNqNrcji/QTyvbKRFGmTi7peRs6/xXm0TJVGgIaOGOCWuZ52ECJMIdD3TpnOZSz9PoyXTkKGq01G08zjGpc2DJa02b5aeeIehfvCJ6+GOpcydFXrvZU6492+PnLln8o83fHjcKbmATHznqWrrj5Ez9frFgwOw/X4Q== butterfly@LAPTOP-A496M34Q"
}

resource "aws_instance" "jenkins_instance" {
  ami                    = "ami-0dc8f589abe99f538"
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.allow_computer.id]
  key_name               = aws_key_pair.jenkins_automation.key_name
}
