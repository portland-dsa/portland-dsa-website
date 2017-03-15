# What is this?

This is a repo for our Ansible playbooks. 

# What is Ansible and how is that useful?

Ansible is software that read a set of instructions in YAML format and runs specific commands against a server. We're using Vagrant and Ansible together to set up VMs on our development machine so that everyone's environment is similar! 

The idea is that when you want to start working on a project, you should be able to start as quickly as possible and with as few hurdles!

# How can I use this repo?

Before you can use this, you'll need to install a couple pieces of software

- [Ansible](https://github.com/ansible/ansible) (~ 2.0.0.2)
- [Vagrant](https://www.vagrantup.com/docs/installation/) (~ 1.7.4)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads) 

And you may need to update your setuptools: `$ pip upgrade setuptools`

# Okay, now that I've installed those, how do I use this repo?

You can add this repo as a git submodule in a project

`$ git add submodule git@github.com:rumors-studio/ansible.git`

You can use the Vagrantfile in this repo as a template for your projects Vagrantfile

Run Vagrant

`$ vagrant up --provision`
