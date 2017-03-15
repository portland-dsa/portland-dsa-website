# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

role :app, %w(username@ip.addre.ss)
role :web, %w(username@ip.addre.ss)
role :db,  %w(username@ip.addre.ss)

# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult[net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start).
#
# Global options
# --------------
set :ssh_options, {
  keys: %w(/home/username/.ssh/id_rsa),
  forward_agent: true,
  auth_methods: %w(publickey password)
}

set :deploy_to, '/path/to/production/site/'
