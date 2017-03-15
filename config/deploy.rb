# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'my_app_name'
set :repo_url, 'git@example.com:me/my_repo.git'

ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :scm, :git
set :git_strategy, Capistrano::Git::SubmoduleStrategy
set :format, :pretty
set :log_level, :debug

set :linked_files, fetch(:linked_files, []).push(
  'wp-config.php',
  '.htaccess'
)

set :linked_dirs, fetch(:linked_dirs, []).push('wp-content/uploads')
