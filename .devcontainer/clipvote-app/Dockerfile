FROM oven/bun:debian
ENV SHELL /bin/bash
RUN <<-EOF
	#!/bin/bash
	apt-get update
	apt-get install -y --no-install-recommends git
	# apt cache clean
	apt-get clean
	rm -rf /var/lib/apt/lists/*
EOF
