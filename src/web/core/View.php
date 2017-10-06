<?php
// The view clas
class View
{
  // View file in /app/views
  private $file;
  // Data of the view
  private $data;

  public function __construct($file, $data = null)
  {
    $this->file = $file;
    $this->data = $data;
  }

  public function parseView()
  {
    // Include the view file
    include ROOT_PATH . '/web/views/' . $this->file . '.php';
  }

}